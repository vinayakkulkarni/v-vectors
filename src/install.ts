import { App as Application, Plugin } from 'vue';
import { VSvg } from './components';
import { setVueInstance } from './utils/config/index';

let installed: boolean = false;

const install: Exclude<Plugin['install'], undefined> = (
  instance: Application,
) => {
  if (!installed) {
    setVueInstance(instance);
    instance.component('VSvg', VSvg);
    installed = true;
  }
};

export default install;
