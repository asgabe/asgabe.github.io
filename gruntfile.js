module.exports = function(grunt) {
    grunt.initConfig({

        watch: {
            less: {
                files: ['src/assets/stylesheet/*.less'],
                tasks: ['less:dev'],
            }
        },

        less: {
            dev: {
                options: {
                    paths: ["src/public/stylesheet"],
                    compress: true,
                },
                files: {
                    "src/public/stylesheet/source.css": "src/assets/stylesheet/_source.less"
                }
            }
        },

        web_server: {
            options: {
                cors: true,
                port: 8282,
                nevercache: true,
                logRequests: true,
                runInBackground: true
            },
            foo: './'
        }
    });


    grunt.loadNpmTasks('grunt-web-server');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['less', 'watch', 'web_server']);
};