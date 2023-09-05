import type { ComponentResolveResult, ComponentResolver } from 'unplugin-vue-components/types';

export interface cubuiResolverOptions {
  /**
   * cubui or cubui-Taro
   *
   * @default false
   */
  taro?: boolean;

  /**
   * compatible with unplugin-auto-import
   *
   * @default false
   */
  autoImport?: boolean;
}

const nutFunctions = ['showToast', 'showNotify', 'showDialog', 'showImagePreview'];

function getNutResolved(name: string, options: cubuiResolverOptions): ComponentResolveResult {
  const { taro = false, autoImport = false } = options;

  const packageName = taro ? '@cubui/cubui-taro' : '@cubui/cubui';

  const componentName = autoImport ? name.slice(4) : name;

  const style = `${packageName}/dist/packages/${componentName.toLowerCase()}/style`;

  return {
    name,
    from: packageName,
    sideEffects: style
  };
}

/**
 * Resolver for cubui 4.0+
 *
 * @link https://github.com/cubfe/cubui
 */
export default function cubuiResolver(options: cubuiResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name) => {
      const { autoImport = false } = options;

      if (autoImport && nutFunctions.includes(name)) return getNutResolved(name, options);

      if (name.startsWith('Nut')) return getNutResolved(name.slice(3), options);
    }
  };
}
