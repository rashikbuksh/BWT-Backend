import { param } from 'express-validator';
import SE from '../../../util/swagger_example.js';

//* Work Problem *//

export const pathWorkProblem = {
	'/work/problem': {
		get: {
			tags: ['work.problem'],
			summary: 'Get all work problems',
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work problem name'),
					category: SE.type_enum('customer', 'employee'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		post: {
			tags: ['work.problem'],
			summary: 'Create a work problem',
			requestBody: SE.requestBody_schema_ref('work/problem'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/problem'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/problem/{uuid}': {
		get: {
			tags: ['work.problem'],
			summary: 'Get a work problem by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work problem to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work problem name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.problem'],
			summary: 'Update a work problem by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work problem to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/problem'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/problem'),
					405: SE.response(405),
				},
			},
		},
		delete: {
			tags: ['work.problem'],
			summary: 'Delete a work problem by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work problem to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work problem name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWorkInfo = {
	'/work/info': {
		get: {
			tags: ['work.info'],
			summary: 'Get all work info',
			parameters: [
				SE.parameter_query('customer_uuid', 'customer_uuid', [
					'c6mRD1fcb7qOs9O',
				]),
				SE.parameter_query('status', 'status', ['pending', 'complete']),
			],

			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					user_name: SE.string('user_name'),
					received_date: SE.date_time(),
					is_product_received: SE.boolean(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		post: {
			tags: ['work.info'],
			summary: 'Create a work info',
			requestBody: SE.requestBody_schema_ref('work/info'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/info'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/info/{uuid}': {
		get: {
			tags: ['work.info'],
			summary: 'Get a work info by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work info to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					user_name: SE.string('user_name'),
					received_date: SE.date_time(),
					is_product_received: SE.boolean(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.info'],
			summary: 'Update a work info by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work info to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/info'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/info'),
					405: SE.response(405),
				},
			},
		},
		delete: {
			tags: ['work.info'],
			summary: 'Delete a work info by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work info to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					user_name: SE.string('user_name'),
					received_date: SE.date_time(),
					is_product_received: SE.boolean(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
	'/work/order-details-by-info/{info_uuid}': {
		get: {
			tags: ['work.info'],
			summary: 'Get order details by info uuid',
			parameters: [
				{
					name: 'info_uuid',
					in: 'path',
					description: 'UUID of the info to get order details',
					required: true,
					type: 'string',
					format: 'uuid',
				},
				SE.parameter_query('process', 'process', ['true', 'false']),
				SE.parameter_query('diagnosis', 'diagnosis', ['true', 'false']),
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					order_id: SE.string('WO25-0001'),
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					user_name: SE.string('user_name'),
					model_uuid: SE.uuid(),
					model_name: SE.string('model_name'),
					size_uuid: SE.uuid(),
					size_name: SE.string('size_name'),
					serial_no: SE.string('serial_no'),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					accessories: SE.array(),
					is_product_received: SE.boolean(),
					receive_date: SE.date_time(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWorkOrder = {
	'/work/order': {
		get: {
			tags: ['work.order'],
			summary: 'Get all work orders',
			parameters: [
				SE.parameter_query('qc', 'qc', ['true', 'false']),
				SE.parameter_query('is_delivered', 'is_delivered', [
					'true',
					'false',
				]),
				SE.parameter_query('customer_uuid', 'customer_uuid', ['uuid']),
				SE.parameter_query('work_in_hand', 'work_in_hand', [
					'true',
					'false',
				]),
				SE.parameter_query('is_repair', 'is_repair', ['true', 'false']),
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					order_id: SE.string('WO25-0001'),
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					model_uuid: SE.uuid(),
					model_name: SE.string('model_name'),
					size_uuid: SE.uuid(),
					size_name: SE.string('size_name'),
					serial_no: SE.string('serial_no'),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					accessories: SE.array(),
					is_product_received: SE.boolean(),
					receive_date: SE.date_time(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		post: {
			tags: ['work.order'],
			summary: 'Create a work order',
			requestBody: SE.requestBody_schema_ref('work/order'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/order'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/order/{uuid}': {
		get: {
			tags: ['work.order'],
			summary: 'Get a work order by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work order to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					order_id: SE.string('WO25-0001'),
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					model_uuid: SE.uuid(),
					model_name: SE.string('model_name'),
					size_uuid: SE.uuid(),
					size_name: SE.string('size_name'),
					serial_no: SE.string('serial_no'),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					accessories: SE.array(),
					is_product_received: SE.boolean(),
					receive_date: SE.date_time(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.order'],
			summary: 'Update a work order by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work order to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/order'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/order'),
					405: SE.response(405),
				},
			},
		},
		delete: {
			tags: ['work.order'],
			summary: 'Delete a work order by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work order to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					order_id: SE.string('WO25-0001'),
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					model_uuid: SE.uuid(),
					model_name: SE.string('model_name'),
					size_uuid: SE.uuid(),
					size_name: SE.string('size_name'),
					serial_no: SE.string('serial_no'),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					accessories: SE.array(),
					is_product_received: SE.boolean(),
					receive_date: SE.date_time(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
	'/work/diagnosis-details-by-order/{order_uuid}': {
		get: {
			tags: ['work.order'],
			summary: 'Get diagnosis details by order uuid',
			parameters: [
				{
					name: 'order_uuid',
					in: 'path',
					description: 'UUID of the order to get diagnosis details',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					order_id: SE.string('WO25-0001'),
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					model_uuid: SE.uuid(),
					model_name: SE.string('model_name'),
					size_uuid: SE.uuid(),
					size_name: SE.string('size_name'),
					serial_no: SE.string('serial_no'),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					accessories: SE.array(),
					is_product_received: SE.boolean(),
					receive_date: SE.date_time(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
					diagnosis: SE.array({
						id: SE.integer(),
						diagnosis_id: SE.string('WD25-0001'),
						uuid: SE.uuid(),
						order_uuid: SE.uuid(),
						order_id: SE.string('WO25-0001'),
						engineer_uuid: SE.uuid(),
						problems_uuid: SE.array(),
						problem_statement: SE.string('problem_statement'),
						status: SE.boolean(),
						status_update_date: SE.date_time(),
						proposed_cost: SE.number(),
						is_proceed_to_repair: SE.boolean(),
						created_by: SE.uuid(),
						created_by_name: SE.string('created_by_name'),
						created_at: SE.date_time(),
						updated_at: SE.date_time(),
						remarks: SE.string('remarks'),
					}),
				}),
			},
		},
	},
	'/work/order-by-info/{info_uuid}': {
		get: {
			tags: ['work.order'],
			summary: 'Get order by info uuid',
			parameters: [
				{
					name: 'info_uuid',
					in: 'path',
					description: 'UUID of the info to get order',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],

			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					order_id: SE.string('WO25-0001'),
					uuid: SE.uuid(),
					user_uuid: SE.uuid(),
					user_name: SE.string('user_name'),
					model_uuid: SE.uuid(),
					model_name: SE.string('model_name'),
					size_uuid: SE.uuid(),
					size_name: SE.string('size_name'),
					serial_no: SE.string('serial_no'),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					accessories: SE.array(),
					is_product_received: SE.boolean(),
					receive_date: SE.date_time(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWorkDiagnosis = {
	'/work/diagnosis': {
		get: {
			tags: ['work.diagnosis'],
			summary: 'Get all work diagnosis',
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					diagnosis_id: SE.string('WD25-0001'),
					uuid: SE.uuid(),
					order_uuid: SE.uuid(),
					order_id: SE.string('WO25-0001'),
					engineer_uuid: SE.uuid(),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					status: SE.boolean(),
					status_update_date: SE.date_time(),
					proposed_cost: SE.number(),
					is_proceed_to_repair: SE.boolean(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
					customer_problem_statement: SE.string(
						'customer_problem_statement'
					),
					customer_remarks: SE.string('customer_remarks'),
				}),
			},
		},
		post: {
			tags: ['work.diagnosis'],
			summary: 'Create a work diagnosis',
			requestBody: SE.requestBody_schema_ref('work/diagnosis'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/diagnosis'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/diagnosis/{uuid}': {
		get: {
			tags: ['work.diagnosis'],
			summary: 'Get a work diagnosis by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work diagnosis to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					diagnosis_id: SE.string('WD25-0001'),
					uuid: SE.uuid(),
					order_uuid: SE.uuid(),
					order_id: SE.string('WO25-0001'),
					engineer_uuid: SE.uuid(),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					status: SE.boolean(),
					status_update_date: SE.date_time(),
					proposed_cost: SE.number(),
					is_proceed_to_repair: SE.boolean(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.diagnosis'],
			summary: 'Update a work diagnosis by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work diagnosis to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/diagnosis'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/diagnosis'),
					405: SE.response(405),
				},
			},
		},
		delete: {
			tags: ['work.diagnosis'],
			summary: 'Delete a work diagnosis by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work diagnosis to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					diagnosis_id: SE.string('WD25-0001'),
					uuid: SE.uuid(),
					order_uuid: SE.uuid(),
					engineer_uuid: SE.uuid(),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					status: SE.boolean(),
					status_update_date: SE.date_time(),
					proposed_cost: SE.number(),
					is_proceed_to_repair: SE.boolean(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},

	'/work/diagnosis-by-order/{order_uuid}': {
		get: {
			tags: ['work.diagnosis'],
			summary: 'Get a work diagnosis by order uuid',
			parameters: [
				{
					name: 'order_uuid',
					in: 'path',
					description: 'UUID of the order to get diagnosis',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					diagnosis_id: SE.string('WD25-0001'),
					uuid: SE.uuid(),
					order_uuid: SE.uuid(),
					engineer_uuid: SE.uuid(),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					status: SE.boolean(),
					status_update_date: SE.date_time(),
					proposed_cost: SE.number(),
					is_proceed_to_repair: SE.boolean(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWorkSection = {
	'/work/section': {
		get: {
			tags: ['work.section'],
			summary: 'Get all work sections',
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work section name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		post: {
			tags: ['work.section'],
			summary: 'Create a work section',
			requestBody: SE.requestBody_schema_ref('work/section'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/section'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/section/{uuid}': {
		get: {
			tags: ['work.section'],
			summary: 'Get a work section by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work section to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work section name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.section'],
			summary: 'Update a work section by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work section to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/section'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/section'),
					405: SE.response(405),
				},
			},
		},
		delete: {
			tags: ['work.section'],
			summary: 'Delete a work section by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work section to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work section name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWorkProcess = {
	'/work/process': {
		get: {
			tags: ['work.process'],
			summary: 'Get all work process',
			parameters: [
				SE.parameter_query('order_uuid', 'order_uuid', [
					'c6mRD1fcb7qOs9O',
				]),
				SE.parameter_query('entry', 'entry', [true, false]),
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					process_id: SE.string('WP25-0001'),
					uuid: SE.uuid(),
					section_uuid: SE.uuid(),
					section_name: SE.string('section_name'),
					diagnosis_uuid: SE.uuid(),
					engineer_uuid: SE.uuid(),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					status: SE.boolean(),
					status_update_date: SE.date_time(),
					is_transferred_for_qc: SE.boolean(),
					is_ready_for_delivery: SE.boolean(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					process_uuid: SE.uuid(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		post: {
			tags: ['work.process'],
			summary: 'Create a work process',
			requestBody: SE.requestBody_schema_ref('work/process'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/process'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/process/{uuid}': {
		get: {
			tags: ['work.process'],
			summary: 'Get a work process by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work process to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					process_id: SE.string('WP25-0001'),
					uuid: SE.uuid(),
					section_uuid: SE.uuid(),
					section_name: SE.string('section_name'),
					diagnosis_uuid: SE.uuid(),
					engineer_uuid: SE.uuid(),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					status: SE.boolean(),
					status_update_date: SE.date_time(),
					is_transferred_for_qc: SE.boolean(),
					is_ready_for_delivery: SE.boolean(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					process_uuid: SE.uuid(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.process'],
			summary: 'Update a work process by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work process to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/process'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/process'),
					405: SE.response(405),
				},
			},
		},

		delete: {
			tags: ['work.process'],
			summary: 'Delete a work process by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work process to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					process_id: SE.string('WP25-0001'),
					uuid: SE.uuid(),
					section_uuid: SE.uuid(),
					section_name: SE.string('section_name'),
					diagnosis_uuid: SE.uuid(),
					engineer_uuid: SE.uuid(),
					problems_uuid: SE.array(),
					problem_statement: SE.string('problem_statement'),
					status: SE.boolean(),
					status_update_date: SE.date_time(),
					is_transferred_for_qc: SE.boolean(),
					is_ready_for_delivery: SE.boolean(),
					warehouse_uuid: SE.uuid(),
					warehouse_name: SE.string('warehouse_name'),
					rack_uuid: SE.uuid(),
					rack_name: SE.string('rack_name'),
					floor_uuid: SE.uuid(),
					floor_name: SE.string('floor_name'),
					box_uuid: SE.uuid(),
					box_name: SE.string('box_name'),
					process_uuid: SE.uuid(),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWorkAccessory = {
	'/work/accessory': {
		get: {
			tags: ['work.accessory'],
			summary: 'Get all work accessories',
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work accessory name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		post: {
			tags: ['work.accessory'],
			summary: 'Create a work accessory',
			requestBody: SE.requestBody_schema_ref('work/accessory'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/accessory'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/accessory/{uuid}': {
		get: {
			tags: ['work.accessory'],
			summary: 'Get a work accessory by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work accessory to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work accessory name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.accessory'],
			summary: 'Update a work accessory by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work accessory to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/accessory'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/accessory'),
					405: SE.response(405),
				},
			},
		},
		delete: {
			tags: ['work.accessory'],
			summary: 'Delete a work accessory by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work accessory to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work accessory name'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWorkZone = {
	'/work/zone': {
		get: {
			tags: ['work.zone'],
			summary: 'Get all work zones',
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					uuid: SE.uuid(),
					name: SE.string('work zone name'),
					division: SE.string('work zone division'),
					latitude: SE.string('work zone latitude'),
					longitude: SE.string('work zone longitude'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		post: {
			tags: ['work.zone'],
			summary: 'Create a work zone',
			requestBody: SE.requestBody_schema_ref('work/zone'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/zone'),
					405: SE.response(405),
				},
			},
		},
	},
	'/work/zone/{uuid}': {
		get: {
			tags: ['work.zone'],
			summary: 'Get a work zone by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work zone to get',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					id: SE.integer(),
					uuid: SE.uuid(),
					name: SE.string('work zone name'),
					division: SE.string('work zone division'),
					latitude: SE.string('work zone latitude'),
					longitude: SE.string('work zone longitude'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
		put: {
			tags: ['work.zone'],
			summary: 'Update a work zone by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work zone to update',
					required: true,
					type: 'string',
				},
			],
			requestBody: SE.requestBody_schema_ref('work/zone'),
			responses: {
				responses: {
					200: SE.response_schema_ref(200, 'work/zone'),
					405: SE.response(405),
				},
			},
		},
		delete: {
			tags: ['work.zone'],
			summary: 'Delete a work zone by uuid',
			parameters: [
				{
					name: 'uuid',
					in: 'path',
					description: 'UUID of the work zone to delete',
					required: true,
					type: 'string',
					format: 'uuid',
				},
			],
			responses: {
				200: SE.response_schema(200, {
					uuid: SE.uuid(),
					name: SE.string('work zone name'),
					division: SE.string('work zone division'),
					latitude: SE.string('work zone latitude'),
					longitude: SE.string('work zone longitude'),
					created_by: SE.uuid(),
					created_by_name: SE.string('created_by_name'),
					created_at: SE.date_time(),
					updated_at: SE.date_time(),
					remarks: SE.string('remarks'),
				}),
			},
		},
	},
};

export const pathWork = {
	...pathWorkProblem,
	...pathWorkInfo,
	...pathWorkOrder,
	...pathWorkDiagnosis,
	...pathWorkSection,
	...pathWorkProcess,
	...pathWorkAccessory,
	...pathWorkZone,
};
