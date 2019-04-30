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
                <style jsx global>{`
      * {
	margin: 0;
	padding: 0;
	font-family:"游ゴシック Medium",YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,sans-serif;
}

body {
	background-color: #262626;
}

html, body, #__next, #__next > div {
	height: 100%;
	color: #d9d9d9;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	background-attachment: fixed;
}

a {
	color: #d9d9d9;
	transition: all 200ms;
}

a:visited {
	color: #d9d9d9;
}

a:active, a:hover {
	color:#b7b7b7;
	text-decoration:none;
}

    `}</style>
            </Head>
        );
    }
}

CommonHead.defaultProps = {
    title: 'Yokohama Landscape',
}

export default CommonHead;