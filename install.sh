#!/usr/bin/env bash
if [ $(basename `pwd`) != "templates" ];then
    echo "[Error] Please do this in the templates directory!"
    exit
fi
if [ ! -d "werttin" ]; then
    git clone https://github.com/SilverBlogTeam/werttin.git
    cd werttin
fi
ln -s $(pwd)/static ../static/werttin
if [ -f "config.json" ]; then
    cp config.example.json config.json
    vim config.json
fi
