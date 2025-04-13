import fs from 'fs';
import yaml from 'yaml';
import path from 'path';

const file = fs.readFileSync(path.resolve(__dirname, 'openapi.yaml'), 'utf8');
export const swaggerSpec = yaml.parse(file);