import Head from 'next/head';

export class CommonHead extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Head>
                <title>{this.props.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="../static/css/common.css"></link>
            </Head>
        );
    }
}

CommonHead.defaultProps = {
    title: 'Yokohama Landscape',
}

export default CommonHead;