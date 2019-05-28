#!/bin/sh

cd angular

npm install

yes | npm install -g @angular/cli

ng build --prod