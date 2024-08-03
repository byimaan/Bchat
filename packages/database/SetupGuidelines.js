/*
This file tells the instructions which were followed to setup the prisma and to shared over the other applicaions :-

[1] Add a new database package (packages/database/package.json)
    // Before
    {
        "name": "database", // change
        "version": "1.0.0", // change
        "main": "index.js", // remove
        "license": "MIT" // remove
    }

    // After
    {
        "name": "@repo/db",
        "version": "0.0.0",
        "dependencies": {
            "@prisma/client": "latest" // Replace with latest version
        },
        "devDependencies": {
            "prisma": "latest" // Replace with latest version
        }
    }		
    <-- CMD -!>
	[1.1] npx prisma init // to create prisma.schema and more 

[2] Create Scripts (packages/database/package.json)
    <-- following //After -!>
        {
            "scripts": {
                "db:generate": "prisma generate",
                "db:push": "prisma db push --skip-generate"
            }
        }
    <-- Important -!>
    // Now we have to define these scripts in the (turbo.json) at root
        [2.1] Registring scripts in ./turbo.json
        {
            "tasks": {
                "db:generate": {
                    "cache": false
                },
                "db:push": {
                    "cache": false
                }	
            }
        }
    <-- CMD -!>
    (At root of project) turbo db:push db:generate

    <-- HEADS UP -!>
    // Use --skip generate flag on db:push

*/
