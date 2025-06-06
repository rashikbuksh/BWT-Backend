import SE, { SED } from '../../../util/swagger_example.js';

//* ./schema.js#department
export const defDepartment = SED({
	required: ['uuid', 'department', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		department: SE.string('HR'),
		created_at: SE.date_time(),
		updated_at: SE.date_time(),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/Department',
});

export const defDesignation = SED({
	required: ['uuid', 'department_uuid', 'designation'],
	properties: {
		uuid: SE.uuid(),
		designation: SE.string('HR Manager'),
		created_at: SE.date_time(),
		updated_at: SE.date_time(),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/Designation',
});

export const defHrUser = SED({
	required: [
		'uuid',
		'name',
		'email',
		'pass',
		'designation_uuid',
		'department_uuid',
		'can_access',
		'created_at',
		'status',
		'user_type',
	],
	properties: {
		uuid: SE.uuid(),
		name: SE.string('John Doe'),
		email: SE.string('john@fzl.com'),
		pass: SE.string('1234'),
		designation_uuid: SE.uuid(),
		department_uuid: SE.uuid(),
		can_access: SE.string('1,2,3'),
		ext: SE.string('562'),
		phone: SE.string('01521533595'),
		created_at: SE.date_time(),
		updated_at: SE.date_time(),
		status: SE.string('active'),
		remarks: SE.string('remarks'),
		user_type: SE.string('employee'),
	},
	xml: 'Hr/User',
});

export const defPolicyAndNotice = SED({
	required: [
		'uuid',
		'type',
		'title',
		'sub_title',
		'url',
		'created_by',
		'created_at',
		'status',
	],
	properties: {
		uuid: SE.uuid(),
		type: SE.string('privacy'),
		title: SE.string('Privacy Policy'),
		sub_title: SE.string('Privacy Policy'),
		url: SE.string('http://fzl.com'),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(),
		status: SE.integer(1),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/PolicyAndNotice',
});

//* HRM *//

// ? Sub Department
export const defSubDepartment = SED({
	required: ['uuid', 'id', 'name', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1), // Example serial id
		name: SE.string('Sub Department Name'),
		hierarchy: SE.integer(0),
		status: SE.boolean(true),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/SubDepartment',
});

// ? workplace
export const defWorkplace = SED({
	required: ['uuid', 'id', 'name', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1), // Example serial id
		name: SE.string('Workplace Name'),
		hierarchy: SE.integer(0),
		status: SE.boolean(true),
		latitude: SE.number(0),
		longitude: SE.number(0),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/Workplace',
});

// ? Employment Type
export const defEmploymentType = SED({
	required: ['uuid', 'id', 'name', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('Employment Type Name'),
		status: SE.boolean(true),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/EmploymentType',
});

// ? Special Holidays
export const defSpecialHolidays = SED({
	required: [
		'uuid',
		'id',
		'name',
		'workplace_uuid',
		'from_date',
		'to_date',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('Special Holiday Name'),
		workplace_uuid: SE.uuid(),
		from_date: SE.date_time(),
		to_date: SE.date_time(),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/SpecialHolidays',
});

// ? General Holiday
export const defGeneralHoliday = SED({
	required: ['uuid', 'id', 'name', 'date', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('General Holiday Name'),
		date: SE.date_time(),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/GeneralHoliday',
});

// ? Device List
export const defDeviceList = SED({
	required: ['uuid', 'id', 'name', 'identifier', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('Device Name'),
		identifier: SE.number(1),
		location: SE.string(null),
		connection_status: SE.boolean(false),
		phone_number: SE.string(null),
		description: SE.string(null),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/DeviceList',
});

// ? Shifts
export const defShifts = SED({
	required: [
		'uuid',
		'id',
		'name',
		'start_time',
		'end_time',
		'late_time',
		'early_exit_before',
		'first_half_end',
		'break_time_end',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('Shift Name'),
		start_time: SE.date_time(),
		end_time: SE.date_time(),
		late_time: SE.date_time(),
		early_exit_before: SE.date_time(),
		first_half_end: SE.date_time(),
		break_time_end: SE.date_time(),
		default_shift: SE.boolean(false),
		color: SE.string(null),
		status: SE.boolean(true),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/Shifts',
});

// ? Shift Group
export const defShiftGroup = SED({
	required: ['uuid', 'id', 'name', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('Shift Group Name'),
		default_shift: SE.boolean(false),
		status: SE.boolean(true),
		off_days: SE.string('[]'), // JSON array as string
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/ShiftGroup',
});

// ? Roster
export const defRoster = SED({
	required: ['uuid', 'shift_group_uuid', 'shifts_uuid', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		shift_group_uuid: SE.uuid(),
		shifts_uuid: SE.uuid(),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/Roster',
});

// ? Leave Policy
export const defLeavePolicy = SED({
	required: ['uuid', 'id', 'name', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('Leave Policy Name'),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/LeavePolicy',
});

// ? Leave Category
export const defLeaveCategory = SED({
	required: ['uuid', 'id', 'name', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		name: SE.string('Leave Category Name'),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/LeaveCategory',
});

// ? Configuration
export const defConfiguration = SED({
	required: ['uuid', 'id', 'leave_policy_uuid', 'created_at'],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		leave_policy_uuid: SE.uuid(),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/Configuration',
});

// ? Configuration Entry
export const defConfigurationEntry = SED({
	required: [
		'uuid',
		'id',
		'configuration_uuid',
		'leave_category_uuid',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		configuration_uuid: SE.uuid(),
		leave_category_uuid: SE.uuid(),
		number_of_leaves_to_provide_file: SE.integer(0),
		maximum_number_of_allowed_leaves: SE.integer(0),
		leave_carry_type: SE.string('none'),
		consecutive_days: SE.integer(0),
		maximum_number_of_leaves_to_carry: SE.integer(0),
		count_off_days_as_leaves: SE.boolean(false),
		enable_previous_day_selection: SE.boolean(false),
		maximum_number_of_leave_per_month: SE.integer(0),
		previous_date_selected_limit: SE.integer(0),
		applicability: SE.string('both'),
		eligible_after_joining: SE.integer(0),
		enable_pro_rata: SE.boolean(false),
		max_avail_time: SE.integer(0),
		enable_earned_leave: SE.boolean(false),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/ConfigurationEntry',
});

// ? Employee
export const defEmployee = SED({
	required: [
		'uuid',
		'id',
		'gender',
		'user_uuid',
		'workplace_uuid',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		gender: SE.string('male'),
		user_uuid: SE.uuid(),
		start_date: SE.date_time(),
		workplace_uuid: SE.uuid(),
		rfid: SE.string(null),
		sub_department_uuid: SE.uuid(),
		primary_display_text: SE.string(null),
		secondary_display_text: SE.string(null),
		configuration_uuid: SE.uuid(),
		employment_type_uuid: SE.uuid(),
		end_date: SE.date_time(null),
		shift_group_uuid: SE.uuid(),
		line_manager_uuid: SE.uuid(),
		hr_manager_uuid: SE.uuid(),
		is_admin: SE.boolean(false),
		is_hr: SE.boolean(false),
		is_line_manager: SE.boolean(false),
		allow_over_time: SE.boolean(false),
		exclude_from_attendance: SE.boolean(false),
		status: SE.boolean(true),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
		// name: SE.string('John Doe'),
		// email: SE.string('john@gmail.com'),
		// pass: SE.string('1234'),
		designation_uuid: SE.uuid(),
		department_uuid: SE.uuid(),
		company_id: SE.boolean(false),
		employee_id: SE.string('123456'),
		leave_policy_uuid: SE.uuid(),
		report_position: SE.string('employee'),
		first_leave_approver_uuid: SE.uuid(),
		second_leave_approver_uuid: SE.uuid(),
		first_late_approver_uuid: SE.uuid(),
		second_late_approver_uuid: SE.uuid(),
		first_manual_entry_approver_uuid: SE.uuid(),
		second_manual_entry_approver_uuid: SE.uuid(),
		father_name: SE.string(null),
		mother_name: SE.string(null),
		blood_group: SE.string(null),
		dob: SE.date_time(null),
		national_id: SE.string(null),
		office_phone: SE.string(null),
		home_phone: SE.string(null),
		personal_phone: SE.string(null),
		is_resigned: SE.boolean(false),
	},
	xml: 'Hr/Employee',
});

export const defEmployeeAddress = SED({
	required: [
		'uuid',
		'created_by',
		'created_at',
		'employee_uuid',
		'address',
		'address_type',
		'thana',
		'district',
	],
	properties: {
		uuid: SE.uuid(),
		index: SE.integer(1),
		address_type: SE.type_enum(['permanent', 'present', 'office', 'other']),
		employee_uuid: SE.uuid(),
		address: SE.string('Address'),
		thana: SE.string('thana'),
		district: SE.string('district'),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/EmployeeAddress',
});

export const defEmployeeHistory = SED({
	required: [
		'uuid',
		'created_by',
		'created_at',
		'employee_uuid',
		'company_name',
		'company_business',
		'start_date',
		'end_date',
		'department',
		'designation',
		'location',
		'responsibilities',
	],
	properties: {
		uuid: SE.uuid(),
		index: SE.integer(1),
		employee_uuid: SE.uuid(),
		company_name: SE.string('Company Name'),
		company_business: SE.string('Company Business'),
		start_date: SE.date_time(),
		end_date: SE.date_time(null),
		department: SE.string('Department'),
		designation: SE.string('Designation'),
		location: SE.string('Location'),
		responsibilities: SE.string('Responsibilities'),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/EmployeeHistory',
});

// ? Employee Education

export const defEmployeeEducation = SED({
	required: [
		'uuid',
		'created_by',
		'created_at',
		'employee_uuid',
		'institute',
		'degree_name',
		'board',
		'year_of_passing',
		'grade',
	],
	properties: {
		uuid: SE.uuid(),
		index: SE.integer(1),
		employee_uuid: SE.uuid(),
		institute: SE.string('Institution Name'),
		degree_name: SE.string('Degree Name'),
		board: SE.string('Board Name'),
		year_of_passing: SE.integer(2024),
		grade: SE.string('A+'),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/EmployeeEducation',
});

// ? Employee Document
export const defEmployeeDocument = SED({
	required: [
		'uuid',
		'created_by',
		'created_at',
		'employee_uuid',
		'document_type',
		'description',
	],
	properties: {
		uuid: SE.uuid(),
		index: SE.integer(1),
		employee_uuid: SE.uuid(),
		document_type: SE.type_enum([
			'ssc',
			'hsc',
			'bachelor',
			'master',
			'passport',
			'national_id',
			'driving_license',
			'other',
		]),
		description: SE.string('Description'),
		file: SE.file(null),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/EmployeeDocument',
});

// ? Device Permission
export const defDevicePermission = SED({
	required: [
		'uuid',
		'id',
		'device_list_uuid',
		'employee_uuid',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		id: SE.integer(1),
		device_list_uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		is_temporary_access: SE.boolean(false),
		temporary_from_date: SE.date_time(null),
		temporary_to_date: SE.date_time(null),
		rfid_access: SE.boolean(false),
		fingerprint_access: SE.boolean(false),
		face_access: SE.boolean(false),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/DevicePermission',
});

// ? Punch Log
export const defPunchLog = SED({
	required: [
		'uuid',
		'employee_uuid',
		'device_list_uuid',
		'punch_type',
		'punch_time',
	],
	properties: {
		uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		device_list_uuid: SE.uuid(),
		punch_type: SE.string('face'),
		punch_time: SE.date_time(),
	},
	xml: 'Hr/PunchLog',
});

// ? Manual Entry
export const defManualEntry = SED({
	required: [
		'uuid',
		'employee_uuid',
		'type',
		'reason',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		type: SE.string('manual_entry'),
		entry_time: SE.date_time(null),
		exit_time: SE.date_time(null),
		reason: SE.string('reason'),
		area: SE.string(null),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
		device_list_uuid: SE.uuid(),
		approved: SE.boolean(false),
	},
	xml: 'Hr/ManualEntry',
});

// ? Apply Leave
export const defApplyLeave = SED({
	required: [
		'uuid',
		'employee_uuid',
		'leave_category_uuid',
		'year',
		'type',
		'from_date',
		'to_date',
		'reason',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		leave_category_uuid: SE.uuid(),
		year: SE.integer(2024),
		type: SE.string('full'),
		from_date: SE.date_time(),
		to_date: SE.date_time(),
		reason: SE.string('reason'),
		file: SE.string(null),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
		approved: SE.boolean(false),
	},
	xml: 'Hr/ApplyLeave',
});

// ? Apply Balance
export const defApplyBalance = SED({
	required: [
		'uuid',
		'employee_uuid',
		'leave_category_uuid',
		'year',
		'days_count',
		'reason',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		leave_category_uuid: SE.uuid(),
		year: SE.integer(2024),
		days_count: SE.integer(0),
		reason: SE.string('reason'),
		file: SE.string(null),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/ApplyBalance',
});

// ? Salary Occasional
export const defSalaryOccasional = SED({
	required: [
		'uuid',
		'employee_uuid',
		'month',
		'year',
		'special_holidays_uuid',
		'amount',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		month: SE.integer(1),
		year: SE.integer(2024),
		special_holidays_uuid: SE.uuid(),
		amount: SE.number(0),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/SalaryOccasional',
});

// ? Salary Increment
export const defSalaryIncrement = SED({
	required: [
		'uuid',
		'employee_uuid',
		'amount',
		'effective_date',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		amount: SE.number(0),
		effective_date: SE.date_time(),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/SalaryIncrement',
});

// ? Salary Entry
export const defSalaryEntry = SED({
	required: [
		'uuid',
		'employee_uuid',
		'type',
		'amount',
		'month',
		'year',
		'created_by',
		'created_at',
	],
	properties: {
		uuid: SE.uuid(),
		employee_uuid: SE.uuid(),
		type: SE.string('full'),
		amount: SE.number(0),
		month: SE.integer(1),
		year: SE.integer(2024),
		created_by: SE.uuid(),
		created_at: SE.date_time(),
		updated_at: SE.date_time(null),
		remarks: SE.string('remarks'),
	},
	xml: 'Hr/SalaryEntry',
});

// * Marge All

export const defHr = {
	user: defHrUser,
	department: defDepartment,
	designation: defDesignation,
	policy_and_notice: defPolicyAndNotice,
	sub_department: defSubDepartment,
	workplace: defWorkplace,
	employment_type: defEmploymentType,
	special_holidays: defSpecialHolidays,
	general_holiday: defGeneralHoliday,
	device_list: defDeviceList,
	shifts: defShifts,
	shift_group: defShiftGroup,
	leave_policy: defLeavePolicy,
	leave_category: defLeaveCategory,
	configuration: defConfiguration,
	configuration_entry: defConfigurationEntry,
	employee: defEmployee,
	employee_address: defEmployeeAddress,
	employee_history: defEmployeeHistory,
	employee_education: defEmployeeEducation,
	employee_document: defEmployeeDocument,
	device_permission: defDevicePermission,
	punch_log: defPunchLog,
	manual_entry: defManualEntry,
	apply_leave: defApplyLeave,
	apply_balance: defApplyBalance,
	salary_occasional: defSalaryOccasional,
	salary_increment: defSalaryIncrement,
	salary_entry: defSalaryEntry,
	roster: defRoster,
};

// * Tag

export const tagHr = [
	{
		name: 'hr.user',
		description: 'Everything about your Users',
	},
	{
		name: 'hr.department',
		description: 'Operations about department',
	},
	{
		name: 'hr.designation',
		description: 'Operations about designation',
	},
	{
		name: 'hr.policy_and_notice',
		description: 'Operations about policy and notice',
	},
	{
		name: 'hr.sub_department',
		description: 'Operations about sub department',
	},
	{
		name: 'hr.workplace',
		description: 'Operations about workplace',
	},
	{
		name: 'hr.employment_type',
		description: 'Operations about employment type',
	},
	{
		name: 'hr.special_holidays',
		description: 'Operations about special holidays',
	},
	{
		name: 'hr.general_holiday',
		description: 'Operations about general holiday',
	},
	{
		name: 'hr.device_list',
		description: 'Operations about device list',
	},
	{
		name: 'hr.shifts',
		description: 'Operations about shifts',
	},
	{
		name: 'hr.shift_group',
		description: 'Operations about shift group',
	},
	{
		name: 'hr.roster',
		description: 'Operations about roster',
	},
	{
		name: 'hr.leave_policy',
		description: 'Operations about leave policy',
	},
	{
		name: 'hr.leave_category',
		description: 'Operations about leave category',
	},
	{
		name: 'hr.configuration',
		description: 'Operations about configuration',
	},
	{
		name: 'hr.configuration_entry',
		description: 'Operations about configuration entry',
	},
	{
		name: 'hr.employee',
		description: 'Operations about employee',
	},
	{
		name: 'hr.employee_address',
		description: 'Operations about employee address',
	},
	{
		name: 'hr.employee_history',
		description: 'Operations about employee history',
	},
	{
		name: 'hr.employee_education',
		description: 'Operations about employee education',
	},
	{
		name: 'hr.employee_document',
		description: 'Operations about employee document',
	},
	{
		name: 'hr.device_permission',
		description: 'Operations about device permission',
	},
	{
		name: 'hr.punch_log',
		description: 'Operations about punch log',
	},
	{
		name: 'hr.manual_entry',
		description: 'Operations about manual entry',
	},
	{
		name: 'hr.apply_leave',
		description: 'Operations about apply leave',
	},
	{
		name: 'hr.apply_balance',
		description: 'Operations about apply balance',
	},
	{
		name: 'hr.salary_occasional',
		description: 'Operations about salary occasional',
	},
	{
		name: 'hr.salary_increment',
		description: 'Operations about salary increment',
	},
	{
		name: 'hr.salary_entry',
		description: 'Operations about salary entry',
	},
];
