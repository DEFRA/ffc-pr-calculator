# FFC Progressive Reduction Calculator

## Prerequisites

- Docker
- Docker Compose

Optional:
- Kubernetes
- Helm

## Running the application

The application is designed to run in containerised environments, using Docker
Compose in development and Kubernetes in production.

- A Helm chart is provided for production deployments to Kubernetes.

### Build the GOV.UK assets

This only needs to be done once or if the `govuk-frontend` npm package is updated.

```
npm run build
```

### Build the application container

This only needs to be done once or if any npm package is updated.

```
docker-compose build
```

### Start the application container

The containerised application will automatically restart when code is updated.

```
docker-compose up
```

## Running tests

A convenience script is provided to run automated tests in a containerised
environment. This will rebuild images before running tests via docker-compose,
using a combination of `docker-compose.yaml` and `docker-compose.test.yaml`.
The command given to `docker-compose run` may be customised by passing
arguments to the test script.

Examples:

```
# Run all tests
scripts/test

# Run tests with file watch
scripts/test -w
```

### Running ZAP scan

A docker-compose exists for running a
[ZAP Baseline Scan](https://www.zaproxy.org/docs/docker/baseline-scan/).
Primarily this will be run during CI. It can also be run locally via the
[zap](./scripts/zap) script.

### Running Pa11y accessibility tests

A docker-compose exists for running a
[Pa11y-CI](https://github.com/pa11y/pa11y-ci).
Primarily this will be run during CI. It can also be run locally via the
[pa11y](./scripts/pa11y) script.

### Running acceptance tests

See [README](./test/acceptance/README.md).

## Licence

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the licence

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
