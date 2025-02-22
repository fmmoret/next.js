import dynamic from 'next/dynamic';
const DynamicComponentWithCustomLoading = dynamic(()=>import('../components/hello')
, {
    loadableGenerated: {
        modules: [
            "some-file.js -> " + "../components/hello"
        ]
    },
    loading: ()=><p >...</p>
});
const DynamicClientOnlyComponent = dynamic(null, {
    loadableGenerated: {
        modules: [
            "some-file.js -> " + "../components/hello"
        ]
    },
    ssr: false
});
