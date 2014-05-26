mongo marketing --eval "printjson(db.content.drop())"
mongoimport --db marketing --collection content --type json --file ../dump/content.json --jsonArray
