module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-docs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: [
                'dist/**/*'
            ]
        },
        copy: {
            dist: {
                src: ['README.md', 'LICENCE*'],
                dest: 'dist/'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compact'
                },
                files: {
                    'src/docs/files/assets/css/main.css': 'src/sass/main.sass'
                }
            }
        },
        docs: {
            options: require('./docpad'),
            srcPath: 'src/docs/',
            outPath: 'dist/'
        },
        autoprefixer: {
            options: {
                cascade: false
            },
            dist: {
                src: 'src/docs/files/assets/css/main.css',
                dest: 'src/docs/files/assets/css/main.css'
            }
        },
        'gh-pages': {
            dist: {
                options: {
                    base: 'dist',
                    branch: 'master'
                },
                src: '**/*'
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.sass'],
                tasks: ['sass', 'autoprefixer']
            },
            docs: {
                files: ['src/docs/**/*'],
                tasks: ['docs']
            }
        }
    });

    grunt.registerTask('build', 'Build DocPad site', [
        'clean',
        'sass',
        'autoprefixer',
        'docs',
        'copy'
    ]);

    grunt.registerTask('publish', 'Publish to typedoc.io', [
        'build',
        'gh-pages'
    ]);

    grunt.registerTask('default', ['build']);
};