import { isIdentifierStartChar } from './string.mjs';

export const parse = (input) => {
    const args=[], opts={};
    for(const i in input){
        let item=input[i];
        if (item === '--') {
            args.push(...input.slice(i + 1));
            break;
        } else if (item.startsWith('--')) {
            opts[item.slice(2)]=true;
        } else if (item.startsWith('-')) {
            for (const flag of item.split('').filter(isIdentifierStartChar)) {
                opts[flag]=true;
            }
        } else {
            args.push(item);
        }
    }
    return [args, opts];
};

export default async function CLI(cmd){
    CLI[cmd.name] = cmd;
    const result = await CLI[cmd.name](...parse(process.argv.slice(2)));
    if (typeof result !== 'undefined') {
        process.stdout.write(`${result}\n`);
    }
};
