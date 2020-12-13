import { Tree } from '@angular-devkit/schematics/src/tree/interface';

import {
	addPackageJsonDependency,
	NodeDependencyType,
} from './utils/dependencies';

const version = '~6.0.2';

export function installDependencies() {
	return (host: Tree) => {
		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Default,
			name: 'workbox-window',
			overwrite: true,
		});

		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Default,
			name: 'workbox-core',
			overwrite: true,
		});

		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Default,
			name: 'workbox-precaching',
			overwrite: true,
		});

		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Default,
			name: 'workbox-routing',
			overwrite: true,
		});

		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Default,
			name: 'workbox-cacheable-response',
			overwrite: true,
		});

		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Default,
			name: 'workbox-strategies',
			overwrite: true,
		});

		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Default,
			name: 'workbox-expiration',
			overwrite: true,
		});

		// Dev dependencies
		addPackageJsonDependency(host, {
			version,
			type: NodeDependencyType.Dev,
			name: 'workbox-build',
			overwrite: true,
		});
	};
}
