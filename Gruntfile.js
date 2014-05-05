module.exports = function(grunt) {
    'use strict';

    grunt.util.linefeed = '\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // TODO: Implement csscomb when csscomb.js v3 is released
        csscomb: {
            options: {
                config: 'less/.csscomb.json'
            },
            dynamic_mappings: {
                expand: true,
                cwd: 'less',
                src: ['*.less', '!normalize.less'],
                dest: 'less',
                ext: '.less'
            }
        },
        less: {
            dev: {
                options: {
                    strictMath: true,
                    strictUnits: true,
                    syncImport: true
                },
                files: {
                    'css/<%= pkg.name %>.css': 'less/phenom.less'
                }
            },
            prod: {
                options: {
                    strictMath: true,
                    strictUnits: true,
                    syncImport: true,
                    cleancss: true
                },
                files: {
                    'css/<%= pkg.name %>.css': 'less/phenom.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:dev']);
    grunt.registerTask('prod', ['less:prod']);
};
