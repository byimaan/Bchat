# This file tells the instructions which were followed to setup the prisma and to share it as package over the other applications :-

<br>

1. Add a new database package (packages/database/package.json)
    > Before
    {
        "name": "database", // change
        "version": "1.0.0", // change
        "main": "index.js", // remove
        "license": "MIT" // remove
    }

    > After
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
	1. ( npx || yarn ) prisma init // to create prisma.schema and more 

2.  Create Scripts (packages/database/package.json)
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
    > (At root of project) turbo db:push db:generate

    <-- HEADS UP -!>
    > Use --skip generate flag on db:push

3. Exporting your cient 
    // packages/database/src/index.ts
    export * from '@prisma/client';

    // then how other application would be able to access this
    // So add the following in (packages/database/package.json)
    {
        "exports": {
            ".": "./src/index.ts"
        } 
    }

4. All Done! (Ready to be used in other projects under 'apps')
    <- But remember config the following changes in package.json of consumers -!>
    // e.g apps/web/package.json
    {
        "dependencies": {
            "@repo/db": "*"
        }
    }

    import { PrismaClient } from '@repo/db';
    
    const client = new PrismaClient();

5. Optimize and figuring out the scripts 
    // Till here we have reuseable '@repo/db' pacakge 
    // But our db:generate scripts are not optimized yet.
    
    > <-- Imoportant -!>
    **Suppose a new developer comes in your team andnot aware of that we have to run turbo db:generate before running 'turbo dev' they will get errros**

    // SO in order to automate this process we will add a script dependency.
    // .turbo.json
    {
        "tasks": {
            "dev": {
            "dependsOn": ["^db:generate"], // new
            "cache": false
            },
            "build": {
            "dependsOn": ["^db:generate"], // new
            "outputs": ["your-outputs-here"]
            },
            "db:generate": {
            "cache": false
            }
        }
    }


*/
