import { execSync } from 'child_process'
import transform from 'storybook-package-context-loader'
const gitRepoRoot = execSync('git rev-parse --show-toplevel').toString()

export default function packageParser(config) {
    return {
        name: 'package-parser',
        enforce: 'post',
        transform: (src, id) => {
            if (!id.match(/\.stories\.tsx$/)) {
                return src
            }
            return transform.call({resourcePath: id}, src)

        }
    }
}