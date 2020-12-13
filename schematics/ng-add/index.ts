import { join, normalize } from '@angular-devkit/core';
import {
	apply,
	chain,
	mergeWith,
	move,
	Rule,
	SchematicsException,
	template,
	url,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { installDependencies } from './install-dependencies';

import { getWorkspace, updateWorkspace } from './utils/workspace';

export function ngAdd(options: any): Rule {
	return async (host, context) => {
		const workspace = await getWorkspace(host);

		if (!options.project) {
			throw new SchematicsException('Option "project" is required.');
		}

		const project = workspace.projects.get(options.project);
		if (!project) {
			throw new SchematicsException(
				'Project is not defined in this workspace.',
			);
		}

		if (project.extensions['projectType'] !== 'application') {
			throw new SchematicsException(
				'Workbox builder requires a project type of "application".',
			);
		}

		for (const target of project.targets.values()) {
			if (target.builder === 'workbox-builder:build')
				throw new SchematicsException(
					'Target with builder value of `workbox-builder:build` already exists.',
				);
		}

		project.targets.add({
			name: 'build-workbox',
			builder: 'workbox-builder:build',
		});

		const sourcePath = normalize(project.sourceRoot ?? 'src');

		context.addTask(new NodePackageInstallTask());

		return chain([
			updateWorkspace(workspace),
			mergeWith(
				apply(url('./files'), [
					template({ ...options }),
					move(join(sourcePath, 'workbox')),
				]),
			),
			installDependencies(),
		]);
	};
}
