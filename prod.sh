#!/bin/bash
# Example: sh prod.sh --full "commit msg"
if [ "$1" == "--full" ]; then
        echo Running full build...
        cd ~/workspace/open-energy/react-src
        npm run build
        git add -A
        git commit -m "$2"
        git push
        git push heroku master
        echo Done pushing to production
    fi