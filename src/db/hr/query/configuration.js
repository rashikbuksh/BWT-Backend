import { desc, eq, sql } from 'drizzle-orm';
import { validateRequest } from '../../../util/index.js';
import db from '../../index.js';
import { createApi } from '../../../util/api.js';
import { configuration, leave_policy, users } from '../schema.js';

export async function insert(req, res, next) {
	if (!(await validateRequest(req, next))) return;

	const configurationPromise = db
		.insert(configuration)
		.values(req.body)
		.returning({ insertedName: configuration.id });

	try {
		const data = await configurationPromise;
		const toast = {
			status: 201,
			type: 'insert',
			message: `${data[0].insertedName} inserted`,
		};

		return res.status(201).json({ toast, data });
	} catch (error) {
		next(error);
	}
}

export async function update(req, res, next) {
	if (!(await validateRequest(req, next))) return;

	const configurationPromise = db
		.update(configuration)
		.set(req.body)
		.where(eq(configuration.uuid, req.params.uuid))
		.returning({ updatedName: configuration.id });

	try {
		const data = await configurationPromise;
		const toast = {
			status: 200,
			type: 'update',
			message: `${data[0].updatedName} updated`,
		};

		return res.status(200).json({ toast, data });
	} catch (error) {
		next(error);
	}
}

export async function remove(req, res, next) {
	if (!(await validateRequest(req, next))) return;

	const configurationPromise = db
		.delete(configuration)
		.where(eq(configuration.uuid, req.params.uuid))
		.returning({ deletedName: configuration.id });

	try {
		const data = await configurationPromise;
		const toast = {
			status: 200,
			type: 'delete',
			message: `${data[0].deletedName} deleted`,
		};

		return res.status(200).json({ toast, data });
	} catch (error) {
		next(error);
	}
}

export async function selectAll(req, res, next) {
	const resultPromise = db
		.select({
			uuid: configuration.uuid,
			id: configuration.id,
			leave_policy_uuid: configuration.leave_policy_uuid,
			leave_policy_name: leave_policy.name,
			created_by: configuration.created_by,
			created_by_name: users.name,
			created_at: configuration.created_at,
			updated_at: configuration.updated_at,
			remarks: configuration.remarks,
			configuration_entry: sql`(
				SELECT COALESCE(
					json_agg(json_build_object(
						'uuid', ce.uuid,
						'id', ce.id, 
						'leave_category_uuid', ce.leave_category_uuid,
						'leave_category_name', lc.name,
						'maximum_number_of_allowed_leaves', ce.maximum_number_of_allowed_leaves,
						'enable_earned_leave', ce.enable_earned_leave
					)), '[]'::json
				)
				FROM hr.configuration_entry ce
				LEFT JOIN hr.leave_category lc ON ce.leave_category_uuid = lc.uuid
				WHERE ce.configuration_uuid = ${configuration.uuid}
			)`,
		})
		.from(configuration)
		.leftJoin(
			leave_policy,
			eq(configuration.leave_policy_uuid, leave_policy.uuid)
		)
		.leftJoin(users, eq(configuration.created_by, users.uuid))
		.orderBy(desc(configuration.created_at));

	try {
		const data = await resultPromise;
		const toast = {
			status: 200,
			type: 'select',
			message: 'configuration',
		};

		return res.status(200).json({ toast, data });
	} catch (error) {
		next(error);
	}
}

export async function select(req, res, next) {
	if (!(await validateRequest(req, next))) return;

	const configurationPromise = db
		.select({
			uuid: configuration.uuid,
			id: configuration.id,
			leave_policy_uuid: configuration.leave_policy_uuid,
			leave_policy_name: leave_policy.name,
			created_by: configuration.created_by,
			created_by_name: users.name,
			created_at: configuration.created_at,
			updated_at: configuration.updated_at,
			remarks: configuration.remarks,
		})
		.from(configuration)
		.leftJoin(
			leave_policy,
			eq(configuration.leave_policy_uuid, leave_policy.uuid)
		)
		.leftJoin(users, eq(configuration.created_by, users.uuid))
		.where(eq(configuration.uuid, req.params.uuid));

	try {
		const data = await configurationPromise;
		const toast = {
			status: 200,
			type: 'select',
			message: 'configuration',
		};

		return res.status(200).json({ toast, data: data[0] });
	} catch (error) {
		next(error);
	}
}

export async function configurationEntryDetailsByConfiguration(req, res, next) {
	if (!(await validateRequest(req, next))) return;

	const { configuration_uuid } = req.params;

	try {
		const api = await createApi(req);
		const fetchData = async (endpoint) =>
			await api
				.get(`${endpoint}/${configuration_uuid}`)
				.then((response) => response.data)
				.catch((error) => {
					throw error;
				});

		const [configuration, configuration_entry] = await Promise.all([
			fetchData('/hr/configuration'),
			fetchData('/hr/configuration-entry/by'),
		]);

		const response = {
			...configuration?.data,
			configuration_entry: configuration_entry?.data || [],
		};

		const toast = {
			status: 200,
			type: 'select',
			message: 'configuration_entry',
		};
		return res.status(200).json({ toast, data: response });
	} catch (error) {
		next(error);
	}
}
