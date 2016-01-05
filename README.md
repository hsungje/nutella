# nutella
### Initialization
1. Clone this repo `$ git clone git@github.com:donkeysmash/nutella.git`.
2. Install postgres `$ brew install postgres`.
3. Start Postgres `$ pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`
	- you can stop it by `$ pg_ctl -D /usr/local/var/postgres stop -s -m fast`
4. Go to nutella directory
	- `$ npm install` to install all the dependencies.
	- `$ npm start` to start the back-end.
	- `$ npm run dev` to serve `webpack` for the front-end.
5. Your app should be running at `localhost:3000`.

