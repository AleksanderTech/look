
import { router } from './router.js';
import Look from './look.js';

let app = document.getElementById('app');
Look.use(router);
Look.mount(app);
