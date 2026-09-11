# Hello External (OpenShift Community Tools)

**Community project. Not officially supported by Red Hat.**

Example external OCT module — a minimal OpenShift Console plugin designed to be installed via the storefront's "Add external extension" button, not from the community catalog.

- **Plugin ID:** `oct-hello-external`
- **Image:** `quay.io/cjanisze/oct-hello-external:1.0.0-ocp4.22` (`<semver>-ocp<major.minor>`)
- **Route:** `/community-tools/management/hello-external`
- **Git branch:** `main`

This is **not** part of the Community Tools catalog. It lives in a separate repo and is installed by pasting the `external-tool.yaml` into the storefront's external extension modal.

Validated on OpenShift **4.22** (PatternFly 6).

## What it does

Displays a single page with:
1. A Community disclaimer banner
2. "Hello External!" heading with an explanation of external modules
3. A link to this GitHub repository

## Installing as an external extension

1. Open the OCT storefront on your cluster
2. Click "Add external extension"
3. Paste the contents of [`external-tool.yaml`](external-tool.yaml)
4. The storefront creates the Namespace, Deployment, Service, and ConsolePlugin

## Contributing — cluster-portable code

Do **not** hardcode environment-specific values. See `.cursor/rules/oct-no-env-hardcoding.mdc`.

## Build

```bash
yarn install
yarn build
```

## Deploy

`deploy/install.yaml` is for cluster-admin manual install. Prefer the storefront "Add external extension" flow. Do not `oc apply` unless asked.
