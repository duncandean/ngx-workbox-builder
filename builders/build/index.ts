import {
	BuilderContext,
	BuilderOutput,
	createBuilder,
} from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';

interface WorkboxBuilderOptions extends JsonObject {
	command: string;
	args: string[];
}

function build(
	options: WorkboxBuilderOptions,
	context: BuilderContext,
): Promise<BuilderOutput> {
	// TODO(duncan): Implement builder
	return Promise.reject('Unimplemented!');
}

export default createBuilder(build);
