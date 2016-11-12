import { TodoResolver } from './todo';
import { merge } from 'lodash';

export default merge(TodoResolver) as any;