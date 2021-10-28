FROM registry.cn-hangzhou.aliyuncs.com/ycg-base/nginx:1.20.1-20210721

ADD docker_init/nginx/conf.d /etc/nginx/conf.d

ADD dist /www

