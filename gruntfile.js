module.exports = function(grunt) {
    grunt.initConfig({

        less: {
            development: {
                options: {
                    paths: ["src/public/css"],
                    compress: false,
                },
                files: {
                    "src/public/css/source.css": "src/assets/less/source.less"
                }
            }
        },
        watch: {
            less: {
                files: ['src/assets/less/*.less'],
                tasks: ['less'],
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['less']);
};