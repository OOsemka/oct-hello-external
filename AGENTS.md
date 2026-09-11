# AGENTS.md — Hello External (OCT extension)

This is **OpenShift Community Tools (OCT)**, a **community project**, not an official Red Hat supported product. Do not describe it as official Red Hat software.

This repository is an **example external module** for the OCT storefront. It demonstrates how to add a ConsolePlugin via the "Add external extension" button (pasting a CommunityTool YAML) rather than from the community catalog.

## Identifiers

| | Value |
| --- | --- |
| Plugin ID / ConsolePlugin / `package.json` `consolePlugin.name` | **`oct-hello-external`** |
| Image | `quay.io/cjanisze/oct-hello-external:1.0.0-ocp4.22` (`<semver>-ocp<major.minor>`) |
| i18n | `plugin__oct-hello-external` |
| Route | `/community-tools/management/hello-external` |

Display name is **Hello External**. No PVC or discovery sidecar.

**Current version:** `1.0.0` (package.json / consolePlugin.version).

## What this plugin owns

A single page at `/community-tools/management/hello-external` that displays:
- A CommunityDisclaimer banner
- "Hello External!" with an explanation that this is an external (non-catalog) module
- A link to the GitHub repository

Uses the signed-in user's console credentials (Console SDK). No extra ServiceAccount.

## External module flow

This plugin is **not** in the storefront catalog. To install it:
1. Open the storefront → "Add external extension"
2. Paste the contents of `external-tool.yaml`
3. The storefront creates the Namespace, Deployment, Service, and ConsolePlugin

The `external-tool.yaml` in the repo root contains the CommunityTool YAML definition.

## OpenShift and extension versions

Image tags are **always** `<semver>-ocp<major.minor>` (e.g. `1.0.0-ocp4.22`).

- Git: `main` tracks the newest supported minor (currently **4.22**).
- PatternFly 6 on 4.22; do not mix PF majors on one branch.

## Navigation

This plugin **does not** register the Community Tools section or hubs. Open from the storefront after adding the external extension.

## No environment-specific hardcoding

Never bake in lab hostnames, StorageClasses, networks, or similar. See `.cursor/rules/oct-no-env-hardcoding.mdc`.

## PatternFly 6

Import from `@patternfly/react-core` ^6. Do **not** import PatternFly CSS. Prefix new CSS `he-`. Include `CommunityDisclaimer`.

## Verify

```bash
yarn install
yarn build
```

Do not `oc apply` or push images unless asked.
