FROM ruby:2.7.3
RUN apt-get update -qq && apt-get install -y postgresql-client
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
COPY . /myapp

CMD /bin/bash -c "rm tmp/pids/server.pid && rails s -p 4000 -b 0.0.0.0"