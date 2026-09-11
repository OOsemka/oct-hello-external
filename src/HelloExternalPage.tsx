import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
  Content,
  PageSection,
  Stack,
  StackItem,
} from '@patternfly/react-core';
import { DocumentTitle, ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import CommunityDisclaimer from './CommunityDisclaimer';
import './HelloExternalPage.css';

const I18N = 'plugin__oct-hello-external';

const HelloExternalPage: FC = () => {
  const { t } = useTranslation(I18N);

  return (
    <>
      <DocumentTitle>{t('Hello External')}</DocumentTitle>
      <PageSection type="breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem
            component="a"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/community-tools/management';
            }}
          >
            {t('Management')}
          </BreadcrumbItem>
          <BreadcrumbItem isActive>{t('Hello External')}</BreadcrumbItem>
        </Breadcrumb>
      </PageSection>
      <ListPageHeader title={t('Hello External')} />
      <PageSection>
        <Stack hasGutter>
          <StackItem>
            <CommunityDisclaimer />
          </StackItem>
          <StackItem>
            <Card>
              <CardTitle>{t('Hello External!')}</CardTitle>
              <CardBody>
                <Stack hasGutter>
                  <StackItem>
                    <Content>
                      <p className="he-lead">
                        {t('This is an example of an external (non-catalog) OCT module.')}
                      </p>
                      <p>
                        {t(
                          'It was designed to be installed via the storefront\'s "Add external extension" button by pasting a CommunityTool YAML definition — not from the community catalog.',
                        )}
                      </p>
                      <p>
                        {t('Use this as a template when building your own external OCT extensions.')}
                      </p>
                    </Content>
                  </StackItem>
                  <StackItem>
                    <Content>
                      <p>
                        <strong>{t('Source:')}</strong>{' '}
                        <a
                          href="https://github.com/OOsemka/oct-hello-external"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github.com/OOsemka/oct-hello-external
                        </a>
                      </p>
                    </Content>
                  </StackItem>
                </Stack>
              </CardBody>
            </Card>
          </StackItem>
        </Stack>
      </PageSection>
    </>
  );
};

export default HelloExternalPage;
