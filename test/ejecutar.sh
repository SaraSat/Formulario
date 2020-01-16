webdriver-manager update 2>/dev/null
webdriver-manager start 2>/dev/null &

sleep 10

protractor conf.js

webdriver-manager shutdown

pkill -f webdriver