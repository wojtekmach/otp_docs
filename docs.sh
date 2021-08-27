#!/bin/bash
# set -e

# Setup:
#
#     $ mix escript.install github elixir-lang/ex_doc
#     $ asdf install erlang 24.0.5
#     $ asdf local erlang 24.0.5

pwd=$(pwd)
root=$(elixir -e 'IO.puts :code.lib_dir()')

cd $root/../erts
app=erts
vsn=$(cat vsn.mk | grep VSN | head -1 | awk -F ' +' '{print $3}')
pwd
ex_doc $app $vsn preloaded/ebin -o $pwd/docs/$app --config $pwd/docs.config

echo "<li><a href=\"https://wojtekmach.pl/otp_docs/erts\">erts</a></li>" > $pwd/docs/index.html

for i in $root/**/; do
  cd $i
  app=$(basename $i)
  vsn=$(cat vsn.mk | grep VSN | head -1 | awk -F ' +' '{print $3}')
  ex_doc $app $vsn ebin/ -o $pwd/docs/$app --config $pwd/docs.config
  echo "<li><a href=\"https://wojtekmach.pl/otp_docs/$app\">$app</a></li>" >> $pwd/docs/index.html
done
