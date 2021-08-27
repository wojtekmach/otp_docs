searchNodes=[{"doc":"This is an interface module for the Reltool application. Reltool is a release management tool. It analyses a given Erlang/OTP installation and determines various dependencies between applications. The graphical frontend depicts the dependencies and enables interactive customization of a target system. The backend provides a batch interface for generation of customized target systems. The tool uses an installed Erlang/OTP system as input. root_dir is the root directory of the analysed system and it defaults to the system executing Reltool. Applications may also be located outside root_dir . lib_dirs defines library directories where additional applications may reside and it defaults to the directories listed by the operating system environment variable ERL_LIBS . See the module code for more info. An application directory AppDir under a library directory is recognized by the existence of an AppDir/ebin directory. If this does not exist, Reltool will not consider AppDir at all when looking for applications. It is recommended that application directories are named as the application, possibly followed by a dash and the version number. For example myapp or myapp-1.1 . Finally single modules and entire applications may be read from Escripts. Some configuration parameters control the behavior of Reltool on system ( sys ) level. Others provide control on application ( app ) level and yet others are on module ( mod ) level. Module level parameters override application level parameters and application level parameters override system level parameters. Escript escript level parameters override system level parameters. The following top level options are supported: config This is the main option and it controls the configuration of Reltool. It can either be a sys tuple or a name of a file containing a sys tuple. trap_exit This option controls the error handling behavior of Reltool. By default the window processes traps exit, but this behavior can altered by setting trap_exit to false . wx_debug This option controls the debug level of wx . As its name indicates it is only useful for debugging. See wx:debug/1 for more info. Besides the already mentioned source parameters root_dir and lib_dirs , the following system ( sys ) level options are supported: erts Erts specific configuration. See application level options below. escript Escript specific configuration. An escript has a mandatory file name and escript level options that are described below. app Application specific configuration. An application has a mandatory name and application level options that are described below. mod_cond This parameter controls the module inclusion policy. It defaults to all which means that if an application is included (either explicitly or implicitly) all modules in that application will be included. This implies that both modules that exist in the ebin directory of the application, as well as modules that are named in the app file will be included. If the parameter is set to ebin , both modules in the ebin directory and derived modules are included. If the parameter is set to app , both modules in the app file and derived modules are included. derived means that only modules that are used by other included modules are included. The mod_cond setting on system level is used as default for all applications. incl_cond This parameter controls the application and escript inclusion policy. It defaults to derived which means that the applications that do not have any explicit incl_cond setting, will only be included if any other (explicitly or implicitly included) application uses it. The value include implies that all applications and escripts that do not have any explicit incl_cond setting will be included. exclude implies that all applications and escripts that do not have any explicit incl_cond setting will be excluded. boot_rel A target system may have several releases but the one given as boot_rel will be used as default when the system is booting up. rel Release specific configuration. Each release maps to a rel , script and boot file. See the module systools for more info about the details. Each release has a name, a version and a set of applications with a few release specific parameters such as type and included applications. relocatable This parameter controls whether the erl executable in the target system should automatically determine where it is installed or if it should use a hardcoded path to the installation. In the latter case the target system must be installed with reltool:install/2 before it can be used. If the system is relocatable, the file tree containing the target system can be moved to another location without re-installation. The default is true . profile The creation of the specification for a target system is performed in two steps. In the first step a complete specification is generated. It will likely contain much more files than you are interested in in your customized target system. In the second step the specification will be filtered according to your filters. There you have the ability to specify filters per application as well as system wide filters. You can also select a profile for your system. Depending on the profile , different default filters will be used. There are three different profiles to choose from: development , embedded and standalone . development is default. The parameters that are affected by the profile are: incl_sys_filters , excl_sys_filters , incl_app_filters and excl_app_filters . app_file This parameter controls the default handling of the app files when a target system is generated. It defaults to keep which means that app files are copied to the target system and their contents are kept as they are. strip means that a new app file is generated from the contents of the original app file where the non included modules are removed from the file. all does also imply that a new app file is generated from the contents of the original app file, with the difference that all included modules are added to the file. If the application does not have any app file a file will be created for all but not for keep and strip . debug_info The debug_info parameter controls whether the debug information in the beam file should be kept ( keep ) or stripped strip when the file is copied to the target system. excl_lib This option is experimental. If the excl_lib option is set to otp_root then reltool will not copy anything from the Erlang/OTP installation ($OTP_ROOT) into the target structure. The goal is to create a &quot;slim&quot; release which can be used together with an existing Erlang/OTP installation. The target structure will therefore only contain a lib directory with the applications that were found outside of $OTP_ROOT (typically your own applications), and a releases directory with the generated .rel, .script and .boot files. When starting this release, three things must be specified: Which releases directory to use Tell the release handler to use the releases directory in our target structure instead of $OTP_ROOT/releases . This is done by setting the SASL environment variable releases_dir , either from the command line ( -sasl releases_dir &lt;target-dir&gt;/releases ) or in sys.config . Which boot file to use The default boot file is $OTP_ROOT/bin/start , but in this case we need to specify a boot file from our target structure, typically &lt;target-dir&gt;/releases/&lt;vsn&gt;/&lt;RelName&gt; . This is done with the -boot command line option to erl The location of our applications The generated .script (and .boot) file uses the environment variable $RELTOOL_EXT_LIB as prefix for the paths to all applications. The -boot_var option to erl can be used for specifying the value of this variable, typically -boot_var RELTOOL_EXT_LIB &lt;target-dir&gt;/lib . Example: erl - sasl releases_dir \\ &quot; mytarget / releases \\ &quot; - boot mytarget / releases / 1.0 / myrel \\ - boot_var RELTOOL_EXT_LIB mytarget / lib incl_sys_filters This parameter normally contains a list of regular expressions that controls which files in the system should be included. Each file in the target system must match at least one of the listed regular expressions in order to be included. Further the files may not match any filter in excl_sys_filters in order to be included. Which application files should be included is controlled with the parameters incl_app_filters and excl_app_filters . This parameter defaults to [&quot;.*&quot;] . excl_sys_filters This parameter normally contains a list of regular expressions that controls which files in the system should not be included in the target system. In order to be included, a file must match some filter in incl_sys_filters but not any filter in excl_sys_filters . This parameter defaults to [] . incl_app_filters This parameter normally contains a list of regular expressions that controls which application specific files that should be included. Each file in the application must match at least one of the listed regular expressions in order to be included. Further the files may not match any filter in excl_app_filters in order to be included. This parameter defaults to [&quot;.*&quot;] . excl_app_filters This parameter normally contains a list of regular expressions that controls which application specific files should not be included in the target system. In order to be included, a file must match some filter in incl_app_filters but not any filter in excl_app_filters . This parameter defaults to [] . incl_archive_filters This parameter normally contains a list of regular expressions that controls which top level directories in an application should be included in an archive file (as opposed to being included as a regular directory outside the archive). Each top directory in the application must match at least one of the listed regular expressions in order to be included. Further the files may not match any filter in excl_app_filters in order to be included. This parameter defaults to [&quot;.*&quot;] . excl_archive_filters This parameter normally contains a list of regular expressions that controls which top level directories in an application should not be included in an archive file. In order to be included in the application archive, a top directory must match some filter in incl_archive_filters but not any filter in excl_archive_filters . This parameter defaults to [&quot;^include$&quot;,&quot;^priv$&quot;] . archive_opts This parameter contains a list of options that are given to zip:create/3 when application specific files are packaged into an archive. Only a subset of the options are supported. The most useful options in this context are the ones that control which types of files should be compressed. This parameter defaults to [] . On application ( escript ) level, the following options are supported: incl_cond The value of this parameter overrides the parameter with the same name on system level. On application ( app ) level, the following options are supported: vsn The version of the application. In an installed system there may exist several versions of an application. The vsn parameter controls which version of the application will be chosen. This parameter is mutual exclusive with lib_dir . If vsn and lib_dir are both omitted, the latest version will be chosen. Note that in order for reltool to sort application versions and thereby be able to select the latest, it is required that the version id for the application consits of integers and dots only, for example 1 , 2.0 or 3.17.1 . lib_dir The directory to read the application from. This parameter can be used to point out a specific location to fetch the application from. This is useful for instance if the parent directory for some reason is no good as a library directory on system level. This parameter is mutual exclusive with vsn . If vsn and lib_dir are both omitted, the latest version will be chosen. Note that in order for reltool to sort application versions and thereby be able to select the latest, it is required that the version id for the application consits of integers and dots only, for example 1 , 2.0 or 3.17.1 . mod Module specific configuration. A module has a mandatory name and module level options that are described below. mod_cond The value of this parameter overrides the parameter with the same name on system level. incl_cond The value of this parameter overrides the parameter with the same name on system level. app_file The value of this parameter overrides the parameter with the same name on system level. debug_info The value of this parameter overrides the parameter with the same name on system level. incl_app_filters The value of this parameter overrides the parameter with the same name on system level. excl_app_filters The value of this parameter overrides the parameter with the same name on system level. incl_archive_filters The value of this parameter overrides the parameter with the same name on system level. excl_archive_filters The value of this parameter overrides the parameter with the same name on system level. archive_opts The value of this parameter overrides the parameter with the same name on system level. On module ( mod ) level, the following options are supported: incl_cond This parameter controls whether the module is included or not. By default the mod_cond parameter on application and system level will be used to control whether the module is included or not. The value of incl_cond overrides the module inclusion policy. include implies that the module is included, while exclude implies that the module is not included. derived implies that the module is included if it is used by any other included module. debug_info The value of this parameter overrides the parameter with the same name on application level. DATA TYPES options() = [option()] option() = {config, config() | file()} | {trap_exit, bool()} | {wx_debug, term()} config() = {sys, [sys()]} sys() = {root_dir, root_dir()} | {lib_dirs, [lib_dir()]} | {profile, profile()} | {erts, app()} | {escript, escript_file(), [escript()]} | {app, app_name(), [app()]} | {mod_cond, mod_cond()} | {incl_cond, incl_cond()} | {boot_rel, boot_rel()} | {rel, rel_name(), rel_vsn(), [rel_app()]} | {rel, rel_name(), rel_vsn(), [rel_app()], [rel_opt()]} | {relocatable, relocatable()} | {app_file, app_file()} | {debug_info, debug_info()} | {incl_sys_filters, incl_sys_filters()} | {excl_sys_filters, excl_sys_filters()} | {incl_app_filters, incl_app_filters()} | {excl_app_filters, excl_app_filters()} | {incl_archive_filters, incl_archive_filters()} | {excl_archive_filters, excl_archive_filters()} | {archive_opts, [archive_opt()]} app() = {vsn, app_vsn()} | {lib_dir, lib_dir()} | {mod, mod_name(), [mod()]} | {mod_cond, mod_cond()} | {incl_cond, incl_cond()} | {debug_info, debug_info()} | {app_file, app_file()} | {excl_lib, excl_lib()} | {incl_sys_filters, incl_sys_filters()} | {excl_sys_filters, excl_sys_filters()} | {incl_app_filters, incl_app_filters()} | {excl_app_filters, excl_app_filters()} | {incl_archive_filters, incl_archive_filters()} | {excl_archive_filters, excl_archive_filters()} | {archive_opts, [archive_opt()]} mod() = {incl_cond, incl_cond()} | {debug_info, debug_info()} rel_app() = app_name() | {app_name(), app_type()} | {app_name(), [incl_app()]} | {app_name(), app_type(), [incl_app()]} rel_opt() = {load_dot_erlang, boolean()} app_name() = atom() app_type() = permanent | transient | temporary | load | none app_vsn() = string() archive_opt = zip_create_opt() boot_rel() = rel_name() app_file() = keep | strip | all debug_info() = keep | strip dir() = string() escript() = {incl_cond, incl_cond()} escript_file() = file() excl_app_filters() = regexps() excl_archive_filters() = regexps() excl_lib() = otp_root excl_sys_filters() = regexps() file() = string() incl_app() = app_name() incl_app_filters() = regexps() incl_archive_filters() = regexps() incl_cond() = include | exclude | derived incl_sys_filters() = regexps() lib_dir() = dir() mod_cond() = all | app | ebin | derived | none mod_name() = atom() profile() = development | embedded | standalone re_regexp() = string() reason() = string() regexps() = [re_regexp()] | {add, [re_regexp()]} | {del, [re_regexp()]} rel_file() = term() rel_name() = string() rel_vsn() = string() relocatable = boolean() root_dir() = dir() script_file() = term() server() = server_pid() | options() server_pid() = pid() target_dir() = file() window_pid() = pid() base_dir() = dir() base_file() = file() top_dir() = file() top_file() = file() target_spec() = [target_spec()] | {create_dir, base_dir(), [target_spec()]} | {create_dir, base_dir(), top_dir(), [target_spec()]} | {archive, base_file(), [archive_opt()], [target_spec()]} | {copy_file, base_file()} | {copy_file, base_file(), top_file()} | {write_file, base_file(), iolist()} | {strip_beam_file, base_file()}","ref":"reltool.html","title":"reltool","type":"module"},{"doc":"Server = server() TargetDir = target_dir() Reason = reason() Create a target system. Gives the same result as {ok,TargetSpec}=reltool:get_target_spec(Server) and reltool:eval_target_spec(TargetSpec,RootDir,TargetDir) .","ref":"reltool.html#create_target/2","title":"reltool.create_target/2","type":"function"},{"doc":"TargetSpec = target_spec() RootDir = root_dir() TargetDir = target_dir() Reason = reason() Create the actual target system from a specification generated by reltool:get_target_spec/1 . The creation of the specification for a target system is performed in two steps. In the first step a complete specification will be generated. It will likely contain much more files than you are interested in in your target system. In the second step the specification will be filtered according to your filters. There you have the ability to specify filters per application as well as system wide filters. You can also select a profile for your system. Depending on the profile , different default filters will be used. The top directories bin , releases and lib are treated differently from other files. All other files are by default copied to the target system. The releases directory contains generated rel , script , and boot files. The lib directory contains the applications. Which applications are included and if they should be customized (archived, stripped from debug info etc.) is specified with various configuration parameters. The files in the bin directory are copied from the erts-vsn/bin directory, but only those files that were originally included in the bin directory of the source system. If the configuration parameter relocatable was set to true there is no need to install the target system with reltool:install/2 before it can be started. In that case the file tree containing the target system can be moved without re-installation. In most cases, the RootDir parameter should be set to the same as the root_dir configuration parameter used in the call to reltool:get_target_spec/1 (or code:root_dir() if the configuration parameter is not set). In some cases it might be useful to evaluate the same target specification towards different root directories. This should, however, be used with great care as it requires equivalent file structures under all roots.","ref":"reltool.html#eval_target_spec/3","title":"reltool.eval_target_spec/3","type":"function"},{"doc":"Server = server() Config = config() Reason = reason() Get reltool configuration. Shorthand for reltool:get_config(Server,false,false) .","ref":"reltool.html#get_config/1","title":"reltool.get_config/1","type":"function"},{"doc":"Server = server() InclDefaults = incl_defaults() InclDerived = incl_derived() Config = config() Reason = reason() Get reltool configuration. Normally, only the explicit configuration parameters with values that differ from their defaults are interesting. But the builtin default values can be returned by setting InclDefaults to true . The derived configuration can be returned by setting InclDerived to true .","ref":"reltool.html#get_config/3","title":"reltool.get_config/3","type":"function"},{"doc":"Server = server() RelName = rel_name() RelFile = rel_file() Reason = reason() Get contents of a release file. See rel(4) for more details.","ref":"reltool.html#get_rel/2","title":"reltool.get_rel/2","type":"function"},{"doc":"Server = server() RelName = rel_name() ScriptFile = script_file() Reason = reason() Get contents of a boot script file. See script(4) for more details.","ref":"reltool.html#get_script/2","title":"reltool.get_script/2","type":"function"},{"doc":"WindowPid = window_pid() ServerPid = server_pid() Reason = reason() Return the process identifier of the server process.","ref":"reltool.html#get_server/1","title":"reltool.get_server/1","type":"function"},{"doc":"Server = server() Warning = string() Reason = reason() Get status about the configuration","ref":"reltool.html#get_status/1","title":"reltool.get_status/1","type":"function"},{"doc":"Server = server() TargetSpec = target_spec() Reason = reason() Return a specification of the target system. The actual target system can be created with reltool:eval_target_spec/3 .","ref":"reltool.html#get_target_spec/1","title":"reltool.get_target_spec/1","type":"function"},{"doc":"RelName = rel_name() TargetDir = target_dir() Reason = reason() Install a created target system","ref":"reltool.html#install/2","title":"reltool.install/2","type":"function"},{"doc":"WindowPid = window_pid() Reason = reason() Start a main window process with default options","ref":"reltool.html#start/0","title":"reltool.start/0","type":"function"},{"doc":"Options = options() WindowPid = window_pid() Reason = reason() Start a main window process with options","ref":"reltool.html#start/1","title":"reltool.start/1","type":"function"},{"doc":"Options = options() WindowPid = window_pid() Reason = reason() Start a main window process with options. The process is linked.","ref":"reltool.html#start_link/1","title":"reltool.start_link/1","type":"function"},{"doc":"Options = options() ServerPid = server_pid() Reason = reason() Start a server process with options. The server process identity can be given as an argument to several other functions in the API.","ref":"reltool.html#start_server/1","title":"reltool.start_server/1","type":"function"},{"doc":"Pid = server_pid() | window_pid() Reason = reason() Stop a server or window process","ref":"reltool.html#stop/1","title":"reltool.stop/1","type":"function"}]