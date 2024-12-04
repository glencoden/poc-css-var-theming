const esbuild = require('esbuild')
const cssModulesPlugin = require('esbuild-css-modules-plugin')

const watch = process.argv.includes('--watch')

async function build() {
    const ctx = await esbuild.context({
        entryPoints: ['src/index.tsx'],
        bundle: true,
        outfile: 'dist/index.js',
        metafile: true,
        plugins: [
            cssModulesPlugin({
                inject: true,
                cssModulesOption: {
                    localsConvention: 'camelCase',
                    scopeBehaviour: 'local',
                },
            }),
        ],
    })

    if (watch) {
        await ctx.watch()
        console.log('Watching for changes...')
    } else {
        await ctx.rebuild()
        await ctx.dispose()
    }
}

build().catch(() => process.exit(1))
