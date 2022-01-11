// ----- configuration file -----
// sets the api to use in project.
// for this commit, the project last build with current state
// for production, follow the instructions bellow and change
// the mocking urls to your production urls.


// Un-comment it for production 
// const dev = process.env.NODE_ENV !== 'production';

// comment it for production
export const local_server = 'http://localhost:3000'; 
// Un-comment it for production 
// export const local_server = dev ? 'http://localhost:3000' : 'https://localserver.com';

// comment it for production
export const server = 'http://localhost:9090';
// Un-comment it for production 
// export const server = dev ? 'http://localhost:9090' : 'https://productionserver.com';

export const fetchImagesApi = `${server}/V1/images`;