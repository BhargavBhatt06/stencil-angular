// new imports here
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import { Config } from '@stencil/core';

// props binding
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@web-component/dist/components',
      directivesProxyFile: './../stencil-integration/src/libs/stencil-generated/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
   })
  ],
  plugins: [sass()],
};
