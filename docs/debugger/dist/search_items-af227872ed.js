searchNodes=[{"doc":"Erlang Debugger for debugging and testing of Erlang programs.","ref":"debugger.html","title":"debugger","type":"module"},{"doc":"Module = Name = atom() Args = [term()] Debugs a single process. The module Module is interpreted and apply(Module,Name,Args) is called. This opens an Attach Process window. For details, see the User's Guide.","ref":"debugger.html#quick/3","title":"debugger.quick/3","type":"function"},{"doc":"Mode = local | global File = string() Starts Debugger. If a filename is specified as argument, Debugger tries to load its settings from this file. For details about settings, see the User's Guide. If local is specified as argument, Debugger interprets code only at the current node. If global is specified as argument, Debugger interprets code at all known nodes, this is the default.","ref":"debugger.html#start/0","title":"debugger.start/0","type":"function"},{"doc":"","ref":"debugger.html#start/1","title":"debugger.start/1","type":"function"},{"doc":"","ref":"debugger.html#start/2","title":"debugger.start/2","type":"function"},{"doc":"The i module provides short forms for some of the functions used by the graphical Debugger and some of the functions in module int , the Erlang interpreter. This module also provides facilities for displaying status information about interpreted processes and break points. It is possible to attach to interpreted processes by giving the corresponding process identity only. By default, an attachment window is displayed. Processes at other Erlang nodes can be attached manually or automatically. By preference, these functions can be included in module shell_default . By default, they are included in that module. See Also int(3)","ref":"i.html","title":"i","type":"module"},{"doc":"Prints help text.","ref":"i.html#help/0","title":"i.help/0","type":"function"},{"doc":"Pid = pid() Attaches to the debugged process Pid . An Attach Process window is opened for the process.","ref":"i.html#ia/1","title":"i.ia/1","type":"function"},{"doc":"Pid = pid() Function = {Module,Name}  Module = Name = atom() Attaches to the debugged process Pid . The interpreter calls spawn(Module, Name, [Pid]) (and ignores the result).","ref":"i.html#ia/2","title":"i.ia/2","type":"function"},{"doc":"X = Y = Z = int() Same as ia(Pid) , where Pid is the result of calling the shell function pid(X,Y,Z) .","ref":"i.html#ia/3","title":"i.ia/3","type":"function"},{"doc":"X = Y = Z = int() Function = {Module,Name}  Module = Name = atom() Same as ia(Pid, Function) , where Pid is the result of calling the shell function pid(X,Y,Z) . An attached process is expected to call the unofficial function int:attached(Pid) and to be able to handle messages from the interpreter. For an example, see dbg_wx_trace.erl .","ref":"i.html#ia/4","title":"i.ia/4","type":"function"},{"doc":"Flags = [init | break | exit] Function = {Module,Name,Args}  Module = Name = atom()  Args = [term()] Sets when and how to attach to a debugged process automatically, see int:auto_attach/2 . Function defaults to the standard function used by Debugger.","ref":"i.html#iaa/1","title":"i.iaa/1","type":"function"},{"doc":"","ref":"i.html#iaa/2","title":"i.iaa/2","type":"function"},{"doc":"Module = atom() Line = int() Creates a breakpoint at Line in Module .","ref":"i.html#ib/2","title":"i.ib/2","type":"function"},{"doc":"Module = Name = atom() Arity = int() Creates breakpoints at the first line of every clause of function Module:Name/Arity .","ref":"i.html#ib/3","title":"i.ib/3","type":"function"},{"doc":"Module = atom() Line = int() Action = enable | disable | delete Sets the trigger action of the breakpoint at Line in Module to Action .","ref":"i.html#iba/3","title":"i.iba/3","type":"function"},{"doc":"Module = atom() Line = int() Function = {Module,Name}  Name = atom() Sets the conditional test of the breakpoint at Line in Module to Function . The conditional test is performed by calling Module:Name(Bindings) , where Bindings is the current variable bindings. The function must return true (break) or false (do not break). To retrieve the value of a variable Var , use int:get_binding(Var, Bindings) .","ref":"i.html#ibc/3","title":"i.ibc/3","type":"function"},{"doc":"Module = atom() Line = int() Makes the breakpoint at Line in Module inactive.","ref":"i.html#ibd/2","title":"i.ibd/2","type":"function"},{"doc":"Module = atom() Line = int() Makes the breakpoint at Line in Module active.","ref":"i.html#ibe/2","title":"i.ibe/2","type":"function"},{"doc":"Clears information about processes executing interpreted code by removing all information about terminated processes.","ref":"i.html#ic/0","title":"i.ic/0","type":"function"},{"doc":"AbsModules = [AbsModule] AbsModule = Module | File  Module = atom()  File = string() Interprets the specified module(s). ii/1 interprets the module(s) only at the current node, see int:i/1 . ini/1 interprets the module(s) at all known nodes, see int:ni/1 .","ref":"i.html#ii/1","title":"i.ii/1","type":"function"},{"doc":"Makes a printout of all interpreted modules. Modules are printed together with the full path name of the corresponding source code file.","ref":"i.html#il/0","title":"i.il/0","type":"function"},{"doc":"Starts a new graphical monitor. This is the Monitor window, the main window of Debugger. All the Debugger and interpreter functionality is accessed from the Monitor window. This window displays the status of all processes that have been or are executing interpreted modules.","ref":"i.html#im/0","title":"i.im/0","type":"function"},{"doc":"","ref":"i.html#ini/1","title":"i.ini/1","type":"function"},{"doc":"AbsModule = Module | File  Module = atom()  File = string() Stops interpreting the specified module. iq/1 stops interpreting the module only at the current node. inq/1 stops interpreting the module at all known nodes.","ref":"i.html#inq/1","title":"i.inq/1","type":"function"},{"doc":"Prints the current status of all interpreted processes.","ref":"i.html#ip/0","title":"i.ip/0","type":"function"},{"doc":"Prints all existing breakpoints.","ref":"i.html#ipb/0","title":"i.ipb/0","type":"function"},{"doc":"Module = atom() Prints all existing breakpoints in Module .","ref":"i.html#ipb/1","title":"i.ipb/1","type":"function"},{"doc":"","ref":"i.html#iq/1","title":"i.iq/1","type":"function"},{"doc":"Deletes all breakpoints.","ref":"i.html#ir/0","title":"i.ir/0","type":"function"},{"doc":"Module = atom() Deletes all breakpoints in Module .","ref":"i.html#ir/1","title":"i.ir/1","type":"function"},{"doc":"Module = atom() Line = int() Deletes the breakpoint at Line in Module .","ref":"i.html#ir/2","title":"i.ir/2","type":"function"},{"doc":"Module = Name = atom() Arity = int() Deletes the breakpoints at the first line of every clause of function Module:Name/Arity .","ref":"i.html#ir/3","title":"i.ir/3","type":"function"},{"doc":"Flag = all | no_tail | false Sets how to save call frames in the stack, see int:stack_trace/1 .","ref":"i.html#ist/1","title":"i.ist/1","type":"function"},{"doc":"Returns the current version number of the interpreter. Same as the version number of the Debugger application.","ref":"i.html#iv/0","title":"i.iv/0","type":"function"},{"doc":"The Erlang interpreter provides mechanisms for breakpoints and stepwise execution of code. It is primarily intended to be used by Debugger, see the User's Guide and debugger(3) . The following can be done from the shell: Specify the modules to be interpreted. Specify breakpoints. Monitor the current status of all processes executing code in interpreted modules, also processes at other Erlang nodes. By attaching to a process executing interpreted code, it is possible to examine variable bindings and order stepwise execution. This is done by sending and receiving information to/from the process through a third process, called the meta process. You can implement your own attached process. See int.erl for available functions and dbg_wx_trace.erl for possible messages. The interpreter depends on the Kernel, STDLIB, and GS applications. This means that modules belonging to any of these applications are not allowed to be interpreted, as it could lead to a deadlock or emulator crash. This also applies to modules belonging to the Debugger application. Breakpoints Breakpoints are specified on a line basis. When a process executing code in an interpreted module reaches a breakpoint, it stops. This means that a breakpoint must be set at an executable line, that is, a code line containing an executable expression. A breakpoint has the following: A status, which is active or inactive . An inactive breakpoint is ignored. A trigger action. When a breakpoint is reached, the trigger action specifies if the breakpoint is to continue as active ( enable ), or to become inactive ( disable ), or to be removed ( delete ). Optionally an associated condition. A condition is a tuple {Module,Name} . When the breakpoint is reached, Module:Name(Bindings) is called. If it evaluates to true , execution stops. If it evaluates to false , the breakpoint is ignored. Bindings contains the current variable bindings. To retrieve the value for a specified variable, use get_binding . By default, a breakpoint is active, has trigger action enable , and has no associated condition. For details about breakpoints, see the User's Guide.","ref":"int.html","title":"int","type":"module"},{"doc":"Module = atom() Line = int() Action = enable | disable | delete Sets the trigger action of the breakpoint at Line in Module to Action .","ref":"int.html#action_at_break/3","title":"int.action_at_break/3","type":"function"},{"doc":"Break = {Point,Options}  Point = {Module,Line}   Module = atom()   Line = int()  Options = [Status,Trigger,null,Cond|]   Status = active | inactive   Trigger = enable | disable | delete   Cond = null | Function    Function = {Module,Name}     Name = atom() Gets all breakpoints, or all breakpoints in Module .","ref":"int.html#all_breaks/0","title":"int.all_breaks/0","type":"function"},{"doc":"","ref":"int.html#all_breaks/1","title":"int.all_breaks/1","type":"function"},{"doc":"Flags = [init | break | exit] Function = {Module,Name,Args}  Module = Name = atom()  Args = [term()] Gets and sets when and how to attach automatically to a process executing code in interpreted modules. false means never attach automatically, this is the default. Otherwise automatic attach is defined by a list of flags and a function. The following flags can be specified: init - Attach when a process for the first time calls an interpreted function. break - Attach whenever a process reaches a breakpoint. exit - Attach when a process terminates. When the specified event occurs, the function Function is called as: spawn ( Module , Name , [ Pid | Args ] ) Pid is the pid of the process executing interpreted code.","ref":"int.html#auto_attach/0","title":"int.auto_attach/0","type":"function"},{"doc":"","ref":"int.html#auto_attach/1","title":"int.auto_attach/1","type":"function"},{"doc":"","ref":"int.html#auto_attach/2","title":"int.auto_attach/2","type":"function"},{"doc":"Module = atom() Line = int() Creates a breakpoint at Line in Module .","ref":"int.html#break/2","title":"int.break/2","type":"function"},{"doc":"Module = Name = atom() Arity = int() Creates a breakpoint at the first line of every clause of function Module:Name/Arity .","ref":"int.html#break_in/3","title":"int.break_in/3","type":"function"},{"doc":"Clears information about processes executing interpreted code by removing all information about terminated processes.","ref":"int.html#clear/0","title":"int.clear/0","type":"function"},{"doc":"Pid = pid() X = Y = Z = int() Resumes process execution for Pid or c:pid(X,Y,Z) .","ref":"int.html#continue/1","title":"int.continue/1","type":"function"},{"doc":"","ref":"int.html#continue/3","title":"int.continue/3","type":"function"},{"doc":"Module = Name = atom() Arity = int() Deletes the breakpoints at the first line of every clause of function Module:Name/Arity .","ref":"int.html#del_break_in/3","title":"int.del_break_in/3","type":"function"},{"doc":"Module = atom() Line = int() Deletes the breakpoint at Line in Module .","ref":"int.html#delete_break/2","title":"int.delete_break/2","type":"function"},{"doc":"Module = atom() Line = int() Makes the breakpoint at Line in Module inactive.","ref":"int.html#disable_break/2","title":"int.disable_break/2","type":"function"},{"doc":"Module = atom() Line = int() Makes the breakpoint at Line in Module active.","ref":"int.html#enable_break/2","title":"int.enable_break/2","type":"function"},{"doc":"Module = atom() File = string() Returns the source code filename File for an interpreted module Module .","ref":"int.html#file/1","title":"int.file/1","type":"function"},{"doc":"Var = atom() Bindings = term() Value = term() Retrieves the binding of Var . This function is intended to be used by the conditional function of a breakpoint.","ref":"int.html#get_binding/2","title":"int.get_binding/2","type":"function"},{"doc":"AbsModules = [AbsModule] AbsModule = Module | File | [Module | File]  Module = atom()  File = string() Interprets the specified module(s). i/1 interprets the module only at the current node. ni/1 interprets the module at all known nodes. A module can be specified by its module name (atom) or filename. If specified by its module name, the object code Module.beam is searched for in the current path. The source code Module.erl is searched for first in the same directory as the object code, then in an src directory next to it. If specified by its filename, the filename can include a path and the .erl extension can be omitted. The object code Module.beam is searched for first in the same directory as the source code, then in an ebin directory next to it, and then in the current path. The interpreter requires both the source code and the object code. The object code must include debug information, that is, only modules compiled with option debug_info set can be interpreted. The functions returns {module,Module} if the module was interpreted, otherwise error is returned. The argument can also be a list of modules or filenames, in which case the function tries to interpret each module as specified earlier. The function then always returns ok , but prints some information to stdout if a module cannot be interpreted.","ref":"int.html#i/1","title":"int.i/1","type":"function"},{"doc":"AbsModule = Module | File  Module = atom()  File = string() Reason = no_src | no_beam | no_debug_info | badarg | {app,App}  App = atom() Checks if a module can be interpreted. The module can be specified by its module name Module or its source filename File . If specified by a module name, the module is searched for in the code path. The function returns true if all of the following apply: Both source code and object code for the module is found. The module has been compiled with option debug_info set. The module does not belong to any of the applications Kernel, STDLIB, GS, or Debugger. The function returns {error,Reason} if the module cannot be interpreted. Reason can have the following values: no_src No source code is found. It is assumed that the source code and object code are located either in the same directory, or in src and ebin directories next to each other. no_beam No object code is found. It is assumed that the source code and object code are located either in the same directory, or in src and ebin directories next to each other. no_debug_info The module has not been compiled with option debug_info set. badarg AbsModule is not found. This could be because the specified file does not exist, or because code:which/1 does not return a BEAM filename, which is the case not only for non-existing modules but also for modules that are preloaded or cover-compiled. {app,App} App is kernel , stdlib , gs , or debugger if AbsModule belongs to one of these applications. Notice that the function can return true for a module that in fact is not interpretable in the case where the module is marked as sticky or resides in a directory marked as sticky. The reason is that this is not discovered until the interpreter tries to load the module.","ref":"int.html#interpretable/1","title":"int.interpretable/1","type":"function"},{"doc":"Module = atom() Returns a list with all interpreted modules.","ref":"int.html#interpreted/0","title":"int.interpreted/0","type":"function"},{"doc":"AbsModule = Module | File | [Module | File]  Module = atom()  File = string() Stops interpreting the specified module. n/1 stops interpreting the module only at the current node. nn/1 stops interpreting the module at all known nodes. As for i/1 and ni/1 , a module can be specified by its module name or filename.","ref":"int.html#n/1","title":"int.n/1","type":"function"},{"doc":"","ref":"int.html#ni/1","title":"int.ni/1","type":"function"},{"doc":"","ref":"int.html#nn/1","title":"int.nn/1","type":"function"},{"doc":"Deletes all breakpoints, or all breakpoints in Module .","ref":"int.html#no_break/0","title":"int.no_break/0","type":"function"},{"doc":"","ref":"int.html#no_break/1","title":"int.no_break/1","type":"function"},{"doc":"Snapshot = {Pid, Function, Status, Info}  Pid = pid()  Function = {Module,Name,Args}   Module = Name = atom()   Args = [term()]  Status = idle | running | waiting | break | exit | no_conn  Info = {} | {Module,Line} | ExitReason   Line = int()   ExitReason = term() Gets information about all processes executing interpreted code. Pid - Process identifier. Function - First interpreted function called by the process. Status - Current status of the process. Info - More information. Status is one of the following: idle - The process is no longer executing interpreted code. Info={} . running - The process is running. Info={} . waiting - The process is waiting at a receive . Info={} . break - Process execution is stopped, normally at a breakpoint. Info={Module,Line} . exit - The process is terminated. Info=ExitReason . no_conn - The connection is down to the node where the process is running. Info={} .","ref":"int.html#snapshot/0","title":"int.snapshot/0","type":"function"},{"doc":"Flag = all | no_tail | false Gets and sets how to save call frames in the stack. Saving call frames makes it possible to inspect the call chain of a process, and is also used to emulate the stack trace if an error (an exception of class error) occurs. The following flags can be specified: all Save information about all current calls, that is, function calls that have not yet returned a value. no_tail Save information about current calls, but discard previous information when a tail recursive call is made. This option consumes less memory and can be necessary to use for processes with long lifetimes and many tail recursive calls. This is the default. false Save no information about current calls.","ref":"int.html#stack_trace/0","title":"int.stack_trace/0","type":"function"},{"doc":"","ref":"int.html#stack_trace/1","title":"int.stack_trace/1","type":"function"},{"doc":"Module = atom() Line = int() Function = {Module,Name}  Name = atom() Sets the conditional test of the breakpoint at Line in Module to Function . The function must fulfill the requirements specified in section Breakpoints .","ref":"int.html#test_at_break/3","title":"int.test_at_break/3","type":"function"}]