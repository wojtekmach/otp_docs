#!/bin/bash
set -e

# Setup:
#
#     $ mix escript.install github elixir-lang/ex_doc
#     $ asdf install erlang 24.0.5
#     $ asdf local erlang 24.0.5

main() {
  pwd=$(pwd)
  root=$(elixir -e 'IO.puts :code.lib_dir()')

  cd $root/../erts
  gen preloaded/ebin/

  for i in $root/**/; do
    cd $i
    gen ebin/
  done
}

gen() {
  app=$(basename $(pwd))
  echo ">> $app"

  if [[ -f SKIP ]]; then
    echo skip
    return
  fi

  ebin=$1
  ex_doc $app $(vsn) $ebin -o $pwd/docs/$app --config $pwd/docs.config
  echo "<li><a href=\"https://wojtekmach.pl/otp_docs/$app\">$app</a></li>" >> $pwd/docs/index.html
}

vsn() {
  cat vsn.mk | grep VSN | head -1 | awk -F ' +' '{print $3}'
}

main
