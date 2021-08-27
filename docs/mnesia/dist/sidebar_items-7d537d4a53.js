sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"}],"modules":[{"group":"","id":"mnesia","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:activity/0","id":"activity/0"},{"anchor":"t:config_key/0","id":"config_key/0"},{"anchor":"t:config_result/0","id":"config_result/0"},{"anchor":"t:config_value/0","id":"config_value/0"},{"anchor":"t:create_option/0","id":"create_option/0"},{"anchor":"t:debug_level/0","id":"debug_level/0"},{"anchor":"t:index_attr/0","id":"index_attr/0"},{"anchor":"t:lock_kind/0","id":"lock_kind/0"},{"anchor":"t:read_locks/0","id":"read_locks/0"},{"anchor":"t:result/0","id":"result/0"},{"anchor":"t:select_continuation/0","id":"select_continuation/0"},{"anchor":"t:snmp_struct/0","id":"snmp_struct/0"},{"anchor":"t:snmp_type/0","id":"snmp_type/0"},{"anchor":"t:storage_type/0","id":"storage_type/0"},{"anchor":"t:t_result/1","id":"t_result/1"},{"anchor":"t:table/0","id":"table/0"},{"anchor":"t:tuple_of/1","id":"tuple_of/1"},{"anchor":"t:write_locks/0","id":"write_locks/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"abort/1","id":"abort/1"},{"anchor":"activate_checkpoint/1","id":"activate_checkpoint/1"},{"anchor":"activity/2","id":"activity/2"},{"anchor":"activity/4","id":"activity/4"},{"anchor":"add_table_copy/3","id":"add_table_copy/3"},{"anchor":"add_table_index/2","id":"add_table_index/2"},{"anchor":"all_keys/1","id":"all_keys/1"},{"anchor":"async_dirty/1","id":"async_dirty/1"},{"anchor":"async_dirty/2","id":"async_dirty/2"},{"anchor":"backup/1","id":"backup/1"},{"anchor":"backup/2","id":"backup/2"},{"anchor":"backup_checkpoint/2","id":"backup_checkpoint/2"},{"anchor":"backup_checkpoint/3","id":"backup_checkpoint/3"},{"anchor":"change_config/2","id":"change_config/2"},{"anchor":"change_table_access_mode/2","id":"change_table_access_mode/2"},{"anchor":"change_table_copy_type/3","id":"change_table_copy_type/3"},{"anchor":"change_table_load_order/2","id":"change_table_load_order/2"},{"anchor":"change_table_majority/2","id":"change_table_majority/2"},{"anchor":"clear_table/1","id":"clear_table/1"},{"anchor":"create_schema/1","id":"create_schema/1"},{"anchor":"create_table/2","id":"create_table/2"},{"anchor":"deactivate_checkpoint/1","id":"deactivate_checkpoint/1"},{"anchor":"del_table_copy/2","id":"del_table_copy/2"},{"anchor":"del_table_index/2","id":"del_table_index/2"},{"anchor":"delete/1","id":"delete/1"},{"anchor":"delete/3","id":"delete/3"},{"anchor":"delete_object/1","id":"delete_object/1"},{"anchor":"delete_object/3","id":"delete_object/3"},{"anchor":"delete_schema/1","id":"delete_schema/1"},{"anchor":"delete_table/1","id":"delete_table/1"},{"anchor":"dirty_all_keys/1","id":"dirty_all_keys/1"},{"anchor":"dirty_delete/1","id":"dirty_delete/1"},{"anchor":"dirty_delete/2","id":"dirty_delete/2"},{"anchor":"dirty_delete_object/1","id":"dirty_delete_object/1"},{"anchor":"dirty_delete_object/2","id":"dirty_delete_object/2"},{"anchor":"dirty_first/1","id":"dirty_first/1"},{"anchor":"dirty_index_match_object/2","id":"dirty_index_match_object/2"},{"anchor":"dirty_index_match_object/3","id":"dirty_index_match_object/3"},{"anchor":"dirty_index_read/3","id":"dirty_index_read/3"},{"anchor":"dirty_last/1","id":"dirty_last/1"},{"anchor":"dirty_match_object/1","id":"dirty_match_object/1"},{"anchor":"dirty_match_object/2","id":"dirty_match_object/2"},{"anchor":"dirty_next/2","id":"dirty_next/2"},{"anchor":"dirty_prev/2","id":"dirty_prev/2"},{"anchor":"dirty_read/1","id":"dirty_read/1"},{"anchor":"dirty_read/2","id":"dirty_read/2"},{"anchor":"dirty_select/2","id":"dirty_select/2"},{"anchor":"dirty_update_counter/2","id":"dirty_update_counter/2"},{"anchor":"dirty_update_counter/3","id":"dirty_update_counter/3"},{"anchor":"dirty_write/1","id":"dirty_write/1"},{"anchor":"dirty_write/2","id":"dirty_write/2"},{"anchor":"dump_log/0","id":"dump_log/0"},{"anchor":"dump_tables/1","id":"dump_tables/1"},{"anchor":"dump_to_textfile/1","id":"dump_to_textfile/1"},{"anchor":"error_description/1","id":"error_description/1"},{"anchor":"ets/1","id":"ets/1"},{"anchor":"ets/2","id":"ets/2"},{"anchor":"first/1","id":"first/1"},{"anchor":"foldl/3","id":"foldl/3"},{"anchor":"foldr/3","id":"foldr/3"},{"anchor":"force_load_table/1","id":"force_load_table/1"},{"anchor":"index_match_object/2","id":"index_match_object/2"},{"anchor":"index_match_object/4","id":"index_match_object/4"},{"anchor":"index_read/3","id":"index_read/3"},{"anchor":"info/0","id":"info/0"},{"anchor":"install_fallback/1","id":"install_fallback/1"},{"anchor":"install_fallback/1","id":"install_fallback/1"},{"anchor":"install_fallback/2","id":"install_fallback/2"},{"anchor":"is_transaction/0","id":"is_transaction/0"},{"anchor":"last/1","id":"last/1"},{"anchor":"load_textfile/1","id":"load_textfile/1"},{"anchor":"lock/2","id":"lock/2"},{"anchor":"match_object/1","id":"match_object/1"},{"anchor":"match_object/3","id":"match_object/3"},{"anchor":"move_table_copy/3","id":"move_table_copy/3"},{"anchor":"next/2","id":"next/2"},{"anchor":"prev/2","id":"prev/2"},{"anchor":"read/1","id":"read/1"},{"anchor":"read/2","id":"read/2"},{"anchor":"read/3","id":"read/3"},{"anchor":"read_lock_table/1","id":"read_lock_table/1"},{"anchor":"report_event/1","id":"report_event/1"},{"anchor":"restore/2","id":"restore/2"},{"anchor":"s_delete/1","id":"s_delete/1"},{"anchor":"s_delete_object/1","id":"s_delete_object/1"},{"anchor":"s_write/1","id":"s_write/1"},{"anchor":"schema/0","id":"schema/0"},{"anchor":"schema/1","id":"schema/1"},{"anchor":"select/1","id":"select/1"},{"anchor":"select/2","id":"select/2"},{"anchor":"select/3","id":"select/3"},{"anchor":"select/4","id":"select/4"},{"anchor":"set_debug_level/1","id":"set_debug_level/1"},{"anchor":"set_master_nodes/1","id":"set_master_nodes/1"},{"anchor":"set_master_nodes/2","id":"set_master_nodes/2"},{"anchor":"snmp_close_table/1","id":"snmp_close_table/1"},{"anchor":"snmp_get_mnesia_key/2","id":"snmp_get_mnesia_key/2"},{"anchor":"snmp_get_next_index/2","id":"snmp_get_next_index/2"},{"anchor":"snmp_get_row/2","id":"snmp_get_row/2"},{"anchor":"snmp_open_table/2","id":"snmp_open_table/2"},{"anchor":"start/0","id":"start/0"},{"anchor":"stop/0","id":"stop/0"},{"anchor":"subscribe/1","id":"subscribe/1"},{"anchor":"sync_dirty/1","id":"sync_dirty/1"},{"anchor":"sync_dirty/2","id":"sync_dirty/2"},{"anchor":"sync_log/0","id":"sync_log/0"},{"anchor":"sync_transaction/1","id":"sync_transaction/1"},{"anchor":"sync_transaction/2","id":"sync_transaction/2"},{"anchor":"sync_transaction/3","id":"sync_transaction/3"},{"anchor":"system_info/1","id":"system_info/1"},{"anchor":"table/1","id":"table/1"},{"anchor":"table/2","id":"table/2"},{"anchor":"table_info/2","id":"table_info/2"},{"anchor":"transaction/1","id":"transaction/1"},{"anchor":"transaction/2","id":"transaction/2"},{"anchor":"transaction/3","id":"transaction/3"},{"anchor":"transform_table/3","id":"transform_table/3"},{"anchor":"transform_table/4","id":"transform_table/4"},{"anchor":"traverse_backup/4","id":"traverse_backup/4"},{"anchor":"traverse_backup/6","id":"traverse_backup/6"},{"anchor":"uninstall_fallback/0","id":"uninstall_fallback/0"},{"anchor":"uninstall_fallback/1","id":"uninstall_fallback/1"},{"anchor":"unsubscribe/1","id":"unsubscribe/1"},{"anchor":"wait_for_tables/2","id":"wait_for_tables/2"},{"anchor":"wread/1","id":"wread/1"},{"anchor":"write/1","id":"write/1"},{"anchor":"write/3","id":"write/3"},{"anchor":"write_lock_table/1","id":"write_lock_table/1"}]}],"sections":[{"anchor":"module-configuration-parameters","id":"Configuration Parameters"},{"anchor":"module-see-also","id":"See Also"}],"title":"mnesia"},{"group":"","id":"mnesia_frag_hash","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"add_frag/1","id":"add_frag/1"},{"anchor":"del_frag/1","id":"del_frag/1"},{"anchor":"init_state/2","id":"init_state/2"},{"anchor":"key_to_frag_number/2","id":"key_to_frag_number/2"},{"anchor":"match_spec_to_frag_numbers/2","id":"match_spec_to_frag_numbers/2"}]}],"sections":[{"anchor":"module-see-also","id":"See Also"}],"title":"mnesia_frag_hash"},{"group":"","id":"mnesia_registry","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create_table/1","id":"create_table/1"},{"anchor":"create_table/2","id":"create_table/2"}]}],"sections":[{"anchor":"module-see-also","id":"See Also"}],"title":"mnesia_registry"}],"tasks":[]}