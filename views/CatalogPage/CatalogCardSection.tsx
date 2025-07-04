import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import React from 'react'
import styled from 'styled-components';
import { media } from 'utils/media';

export default function CatalogCardSection() {
    const FEATURES = [
        {
            imageUrl: '/grid-icons/asset-1.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-2.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-3.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-4.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-5.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-6.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-7.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-8.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
        {
            imageUrl: '/grid-icons/asset-9.svg',
            title: 'Lorem ipsum dolor sit amet.',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
        },
    ];
    return (
        <div>
            <CustomAutofitGrid>
                {FEATURES.map((singleFeature, idx) => (
                    <BasicCard key={singleFeature.title} {...singleFeature} />
                ))}
            </CustomAutofitGrid>
        </div>
    )
}


const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;