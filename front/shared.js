function seconds2timestamp(seconds) {
	var hours = Math.floor(seconds / 3600);
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	seconds = seconds % 60;
	// return hours + ":" + minutes + ":" + seconds;

	return (
		minutes.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		}) +
		":" +
		seconds.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		})
	);
}

function timestamp2seconds(timestamp) {
    var time = timestamp.split(":");
    if (time.length != 3) throw new Error("Invalid timestamp");
    var seconds = 0;
    seconds += parseInt(time[0]) * 3600;
    seconds += parseInt(time[1]) * 60;
    seconds += parseInt(time[2]);
    return seconds;
}

let articles = [
    {   
        title: '신형 그랜저 2.5 시승기...최고의 세단! 심각한 불량도?',
        date: '2022-12-04',
        brand: '현대',
        model: '그랜저',
        article_id: 1,
        channelImageUrl: 'https://yt3.ggpht.com/ytc/AL5GRJXaE02Phk_SsOB8I8fwk5IAu-2NENkG3plXdW042A=s68-c-k-c0x00ffffff-no-rj',
        channelName: '김한용의 MOCAR',
        channelId: '@mocar_official',
        videoId: 'YuHRMdTzlE8',
        summaries: [
            { start: '00:01:00', subject: '전체 디자인', text: '전반적으로 봤을 때 굉장히 어떻게 아름답습니까? 저는 맨날 전시장에서만 보다가 도로에 나온걸 보니까 또 색다르네요.' },
            { start: '00:03:40', subject: '시승 시작', text: '일단 이 차의 외관이나 실내나 디자인이나 이런 것들 꽤 마음에 들고요, 이 정도로 잘 만든 차는 없지 싶어요. 근데 약간 공회전 RPM이 조금 불안한 거, 요게 지금 꽤 아슬아슬한 느낌이 들고요.' },
            { start: '00:05:04', subject: '가속', text: '저희가 타는 차가 아쉽게도 2.5L 가솔린 모델. 그래서 2.5L 가솔린 모델이라는 자동차 차급이 신형 그랜저에는 조금 부족하게 느껴지기는 합니다. 좀 더 세면 좋겠어요.' },
            { start: '00:08:41', subject: '특징', text: '요번 그랜저에 가장 큰 특징은 부드러움입니다. 놀랄 정도로 부드럽습니다.'},
            { start: '00:12:50', subject: '키 디자인', text: '그리고 이 키에 대해서 많이들 불만을 말씀하시는데 크기가 일단 조금 약간 징그러운 크기죠.' },
            { start: '00:13:53', subject: '어댑티브크루즈', text: '어댑티브크루즈 한번 사용해보도록 할게요. 어댑티브크루즈 원터치로 딱 누릅니다. 누르면 지금은 앞 차와의 간격을 조절해주는 장치가 켜진 거에요.' },
            { start: '00:15:17', subject: '차로 보조 장치', text: 'OK 버튼 누르면 차로 변경 보조 기능이 켜집니다. 아니 OK를 눌러야 켜져? 눌려야 켜지는건 또 뭐야…' },
            { start: '00:17:13', subject: '스티어링휠', text: '노멀 모드에서 핸들이 진짜 부드럽고, 핸들의 직경이나 형태나 이런 것들이 클래식하면서도 현대적이여서 저는 굉장히 마음에 드는 그런 스티어링휠이라는 생각이 드네요.'},
            { start: '00:18:11', subject: '내부 인터페이스 문제점', text: '노멀 모드에서 핸들이 진짜 부드럽고, 핸들의 직경이나 형태나 이런 것들이 클래식하면서도 현대적이여서 저는 굉장히 마음에 드는 그런 스티어링휠이라는 생각이 드네요.'},
            { start: '00:19:44', subject: '오디오', text: '오디오 한번 들어보도록 할게요. 오디오를 한번 들어보면요 사운드 정말 좋습니다.'},
            { start: '00:21:09', subject: '뒷좌석', text: '일단 헤드레스트 푹신하고 너무 좋고요. 그래, 이런 느낌 들어야지. 벤츠 S클래스에서 있는 헤드레스트하고 굉장히 비슷한 느낌이 들어요.'},
            { start: '00:26:06', subject: '마무리', text: '훌륭하게 잘 만들어진 자동차에요. 기존 그래저에 대한 로망 그런 것들을 다시 불러오는데 손색이 없는 자동차였고요. 여러가지 면에서 좋았는데 한가지 좀 아쉬운 점, 저희가 받아온 이 차만의 문제겠지만 약간의 품질 문제가 있었던 거 앞으로는 절대 이런 일이 없도록 기대해봅니다.'},
        ]
    },
    
        {   
            title: '신형 그랜저 3.5 4륜구동 진짜 시승기! 가격 5710만원의 시승차는 무엇이 다를까!',
            date: '2022-12-09',
            brand: '현대',
            model: '그랜저',
            article_id: 2,
            channelImageUrl: 'https://yt3.ggpht.com/ytc/AL5GRJXaE02Phk_SsOB8I8fwk5IAu-2NENkG3plXdW042A=s68-c-k-c0x00ffffff-no-rj',
            channelName: '김한용의 MOCAR',
            channelId: '@mocar_official',
            videoId: 'qOPqLr-W9g0',
            summaries: [
                { start: '00:05:20', subject: '트렁크', text: '현대 로고 윗부분을 누르면 열립니다. 트렁크 공간 자체는 굉장히 넓습니다. 히든 스페이스가 하나 더 있고요. 근데 이 높이가 상당히 높습니다. 그래서 짐을 넣으면 짐을 꺼낼 때 약간 허리를 조금 조심하셔야 돼요.' },
                { start: '00:06:02', subject: '전체적인 디자인', text: '전체적으로 봤을 때 안정감 대단합니다. 차가 굉장히 솔리드한 느낌이 들고 굉장히 탄탄한 것 같은, 일단 벨트 라인이 굉장히 높잖아요.' },
                { start: '00:06:41', subject: '2.5 그랜저와 차이', text: '2.5하고 어떤 부부니 다른지 그런 것들을 간단하게 살펴보면요. 일단 타이어가 다르네요. 타이어가 진짜 멋있다는걸 보여주기 위해서인지 레자왁스를 잔뜩 뿌려놨어요. 20인치 휠을 기본적으로 쓰고 있는데 이게 큰건 스타일이죠.' },
                { start: '00:07:30', subject: '뒷좌석', text: '머리 공간을 파놓은게 조금 웃기다고 생각되는 분들도 계신 것 같아요. 처음엔 괜찮아 그런가 보다 할텐데 이게 자꾸만 머리가 자꾸 닿거든요. ' },
                { start: '00:09:37', subject: '앞좌석', text: '차에 들어오고서 시동을 걸어요. 6초 정도 돼야 디스플레이가 켜지거든요. 6초면 그렇게 긴 시간이 아닐 수 있어요. 근데 약간 좀 늦다, 요건 좀 업데이트가 필요해보인다 이런 생각이 듭니다. ' },
                { start: '00:10:16', subject: '사운드 시스템', text: '그리고 이 차에서 가장 중요한 거 새로운 보스 사운드 시스템이잖아요. 드디어 해놓으셨습니다. 계속 말씀드렸더니 지니뮤직을 등록해놓았어요. ' },
                { start: '00:15:15', subject: '빌트인 캠', text: '이제 차의 블랙박스라고 할 수 있는 빌트인 캠이 바뀌었어요. 빌트인캠 2로 바뀌었는데 이전에는 빌트인캠이 메모리가 내장메모리였고 그걸 밖으로 꺼낼 수가 없었잖아요. 근데 이제 빌트인캠도 메모리를 밖에 꺼낼 수 있고, 그래서 기본적으로 이렇게 64GB 메모리를 사용하고 있습니다. ' },
                { start: '00:17:32', subject: '가속', text: '한번 가속해보죠. 에코 모드에서는 뒷바퀴 쪽으로 힘을 굉장히 적게 보내서 4륜구동이지만 전륜구동처럼 작동되게 이렇게 만들어 놓고 있습니다. ' },
                { start: '00:20:02', subject: '서스펜션', text: '그 모든 그랜저하고 차원을 달리하는 정도의 서스펜션을 보여줍니다. 완전히 달라요. 일단 저속일 때는 확실히 그러네요. 이렇게 과속방지석 넣을 때 굉장히 부드럽거든요. ' },
                { start: '00:23:03', subject: '현대기아차 전륜구동', text: '지금 현대기아차의 기술 수준이 어디까지 온겁니까. 전 세계 어디에 전륜구동 세단을 갖고 와도 이 차를 이길 차는 지금 없어 보입니다. 진짜로 독일차 갖고 와보세요. ' },
                { start: '00:25:38', subject: '코너링', text: '차가 무게감은 확실히 있지만 코너링 느낌이 굉장히 소프트해서 코너링 안정적으로 갈 수 있다, 이런건 아니에요. 차가 이렇게 출렁출렁하면서 갑니다. 출렁출렁하지만 그럼에도 옆으로 기울어지지 않아서 그래도 좀 안심하고 그렇게 주행할 수 있는 코너링 성능을 보여주고요. ' },
                { start: '00:26:28', subject: 'HDA', text: 'HDA를 작동시켜 볼게요. HDA 지금 작동시켰고요, 거리는 좁게 이렇게 한번 해볼게요. ' },
                { start: '00:29:04', subject: '2.5L와 3.5L 주행 차이', text: '지금 2.5와 3.5의 차이가 굉장히 큽니다. 너무너무 커요. 2.5L는 이 정도에서 가속페달을 밟으면 자동차에서 뭔가 아 이래서는 안될 거 같은데라는 소리가 났어요. ' },
                { start: '00:34:56', subject: '계기판', text: '계기판을 이렇게 블랙으로 하고 가운데를 심플하게 처리한거 이유가 있지 않느냐, 당연히 그렇게 생각되죠. ' },
                { start: '00:36:21', subject: '제동', text: '제동 느낌도 되게 좋네. 제동할 때 가변 댐퍼를 좀 단단하게 해주는 모양이죠? 그래서 제동 느낌도 이렇게 굉장히 안정적으로 딱. ' },
            ]
        },

        {   
            title: '역대급 반전 [그랜저 GN7 2.5, 윤성로 리뷰]',
            date: '2022-12-09',
            brand: '현대',
            model: '그랜저',
            article_id: 3,
            channelImageUrl: 'https://yt3.ggpht.com/ytc/AL5GRJWahWOoAeQEIJ25Seu0NJrPEJ-x8JDoNxZdZq6jHg=s88-c-k-c0x00ffffff-no-rj',
            channelName: '모트라인 MOTLine',
            channelId: '@Motline',
            videoId: 'bcM7LIt5d08',
            summaries: [
                { start: '00:01:34', subject: '스티어링 휠', text: '우선 스티어링 말씀들을 굉장히 많이 해주셨어요. 일단 디자인적인 거는 저는 개인적으로 나쁘지 않고요 근데 디자인적인 거를 떠나서 이게 실제 운전을 해보니까 불편한 부분이 하나 있어요. ' },
                { start: '00:03:42', subject: '엔진', text: '이 엔진 얘기를 좀 해봐야할 거 같은데요. 이 그랜저도 그렇고요, K8도 마찬가지고요 이상하게 이 3.5 V6 애들이 예전에 우리가 알고 있던 그랜저 TG에 들어가던 6기통의 부드러움 정숙성이 요즘엔 안 나와요. ' },
                { start: '00:05:15', subject: '2.5 엔진', text: '결과적으로 2.5가 출력면이나 있어서나 정숙성 면에 있어서 뭐 크게 그랜저 이 급의 상품성에 걸맞기 않는 모습을 보여주지만 않는다라고 하면은 저는 2.5로 선택하는게 맞다라는 생각을 하는거죠. ' },
                { start: '00:07:45', subject: '출력', text: '그런데 다시 출력으로 돌아와서 말씀을 드리면 이런 일상 영역을 운전하는데 있어서 부족하지 않은 출력과 이런 정숙성을 보여준다면 저는 굳이 3.5를 가야 되나. 다만 이제 이렇게 말씀 드리면 하이브리드는 어때라고 말씀을 하시겠지만. ' },
                { start: '00:09:30', subject: '차량 세팅 및 승차감', text: '사실 저는 이렇게 생긴거랑 그랜저라는 이미지, 이 차가 이렇게 뒷자리에 공을 많이 들여놓은 거를 보았을 때 아 얘는 분명히 K8보다도 더 부드럽겠구나. 그렇게 생각을 했는데 이게 웬 걸? 얘는 지금 K8이랑 완전 반대 세팅이에요. ' },
                { start: '00:12:44', subject: '내부 UI', text: '그리고 ui가 바뀌면서 기능들이 많이 생겼는데요. 2열 시트에 신경을 많이 쓴 만큼 2열 시트 조절도 요 인포테인먼트 디스플레이에서 지금 전부 다 컨트롤할 수 있는데 이건 실수인 것 같아요. ' },
                { start: '00:14:26', subject: '오디오', text: '이제 오디오 궁금해하시는 분들이 많았는데 우리 김나영님의 킬링 보이스를 기준으로 그냥 일반적인 유튜브 스트리밍 음원을 블루투스로 들었을 때를 기준으로 지금 이제 보스가 들어가 있거든요. ' },
                { start: '00:15:30', subject: '네비게이션', text: '그리고 네비게이션 같은 경우는 증강현실 네비게이션이 또 들어가 있죠. 그럼 길 안내를 좀 해볼까요?' },
                { start: '00:16:52', subject: '엠비언트 라이트', text: '그리고 이 엠비언트 라이트는 지금 몇 번 말씀을 드리기는 했지만, 이 드라이브 모드에 따라서 이 위에 여기 들어오는 불빛이 이제 막 휘향찬란하게 바뀌고 하거든요. ' },
                { start: '00:17:10', subject: '계기판 디자인', text: '그리고 이제 계기판 디자인 때문에 또 좀 말이 많던데 디자인을 바꿀 수 있거든요. 차량에서 클러스터 테마 선택. ' },
                { start: '00:18:34', subject: '기어노브', text: '기어노브 너무너무 편하고요. 이건 아이오닉 5 때 이미 칭찬을 좀 많이 했던 그 위치에 들어가 있는 컬럼식 기어노브입니다.' },

            ]
        },

    {
        title: '토레스 사도 되냐고?',
        date: '2022-08-05',
        brand: '현대',
        model: '토레스',
        article_id: 4,
        channelImageUrl: 'https://yt3.ggpht.com/ytc/AMLnZu_WszZPwVss4PdFN2MPcUTFrCDy01XRcwwB3o-e=s48-c-k-c0x00ffffff-no-rj',
        channelName: '모트라인 MOTline',
        channelId: '@Motline',
        videoId: 'PGctGV2J_fM',
        summaries: [
            { start: '00:00:38', subject: '쌍용차', text: '원래 저는 쌍용차에 아무런 바라는게 없는 사람이에요. 바라는게 없는 이유는 기대하지도 않기 때문입니다.' },
            { start: '00:02:00', subject: '승차감', text: '그래서 이 토레스도 좀 기대를 가지고 탔는데, 어 이게 웬걸. 얘가 코란도 이모션 때 보여줬던 그 승차감을 지금 비슷하게 보여주고 있어요.' },
            { start: '00:04:38', subject: '차랑 비교', text: '딱 한 포인트 빼고는 투싼, 스포티지 보다 나아요. 다만 이제 투싼, 스포티지와 비교 했을 때 조금 떨어지는 부분이 있다고 하면은 승차감 부분에 있어서 이런 큰 방지턱에서 떴다가 떨어질 때 받아내주는 저 뒤쪽 서스펜션이 좀 여기서 확 드러나는 느낌은 있어요.' },
            { start: '00:05:41', subject: '엔진과 미션', text: '엔진과 미션도 사실 스펙만 보면은 아쉬운게 맞습니다. 이 1500cc 4기통 엔진의 출력도 그렇고, 트랜스 미션 같은 경우에는 아이신이 들어가있다고는 하지만.' },
            { start: '00:09:06', subject: '호평', text: '솔직히 말씀드리면 이 차를 타고 좀 놀랐습니다. 그래도 쌍용이 이 차를 만들면서 이 최소한의 차의 기본이 되는 기본기에도 투자할 정신이 있구나.' },
            { start: '00:11:46', subject: '가격표 구성', text: '그 놈의 지긋지긋한 가격표 구성. 이게 이제 트림이 T5, T7 이렇게 2개가 있는데, 아래 트림 T5에서는 그 어떤 무슨 발광을 해도 앞좌석에 통풍 시트조차 추가를 못하게 만들어놨습니다.' },
            { start: '00:17:04', subject: '디자인', text: '제가 이 디자인 이야기를 처음부터 하고 시작하려고 그랬는데 너무 마음 아파서 마지막에 합니다. 마자믹에 거의 안보시거든요. 저는 창피합니다. 근데 지금 이 차를 얘기함에 있어서 창피하다는 말을 하기가 사실 정말 불편합니다. ' },

        ]
    },
    {   
        title: '주행느낌 놀랍네요 "V6 그랜저" 배기량 사륜구동 하나로 이렇게 차이가 난다고.?! 풀옵션 3.5 그랜저 시승해봤습니다',
        date: '2022-11-30',
        brand: '현대',
        model: '그랜저',
        article_id: 5,
        channelImageUrl: 'https://yt3.googleusercontent.com/ytc/AL5GRJXQW6Q9Gp-2jJ2YmcjzX5jJSCNJeEWDCskPJ6hg=s176-c-k-c0x00ffffff-no-rj',
        channelName: '우파푸른하늘Woopa TV',
        channelId: '@Woopa87',
        videoId: '7ZNPhAUO_ic',
        summaries: [
            { start: '00:02:19', subject: '시작', text: '자 그래서 오늘 우리가 3.5 풀옵션 캘리그라피를 한번 봐 볼 텐데요, 외관의 디자인은 워낙 많이 설명을 드렸기 때문에 굳이 따로 설명을 하지 않을 거고요. ' },
            { start: '00:02:44', subject: '엔진룸', text: '엔진룸을 열면 뭔가 엔진이 훨씬 더 꽉 차 보이죠. V6의 6기통 엔진이 들어가다 보니까 엔진룸이 꽉 차 있는듯한 느낌이 들고요. ' },
            { start: '00:03:50', subject: '휠/타이어', text: '타이어는 당연히 이제 흡음재 타이어가 들어가 있고요, 요거는 이제 전 트림 동일하게 들어가 있는데 휠 디자인도 굉장히 잘 뽑아냈죠. ' },
            { start: '00:05:09', subject: '내부', text: '확실히 3.5라 그런지 우리가 지금 깡통 모델을 타고 다니잖아요, 가죽의 질감에서 조금 차이가 있기는 합니다. 일반 모델의 가죽의 질감도 나름 훌륭하지 않아요?' },
            { start: '00:05:45', subject: '2.5의 아쉬운 점', text: '2.5를 탔을 때 아쉬운 부분들이 몇 가지가 있었습니다. 일단 첫번째로 정차하고 다시 출발했을 때요. 나가는 느낌이 뭔가 부드럽고 힘있게 나가는게 아니라 그냥 갑자기 뭔가 팍 튀어나가는 이런 느낌이 굉장히 많이 들더라고요. ' },
            { start: '00:07:01', subject: '3.5 주행', text: '이제 본격적으로 한번 3.5를 주행해볼텐데요, 2.5랑 차이가 일단 몇 가지가 있죠. 아까 이야기했던 대로 4륜 구동에 대한 H-trac 차이가 조금 있고요. ' },
            { start: '00:09:16', subject: '연비', text: '실제로 연비도 저희가 한번 보여드릴텐데 저희가 93km 정도 주행을 했을 때 평균 연비가 리터랑 9km가 나왔어요. 별거 아닌거 같아 보이지만 이게 엄청난 차이거든요. ' },
            { start: '00:13:29', subject: 'IG와 k8과의 비교', text: 'ig와 그리고 k8과 비교했을 때도 훨씬 더 체결감이 좋아졌어요. 근데 이게 후륜구동과 또 비교하면 구조적으로 사이를 뛰어넘을만한 그런 변화가 있지는 않습니다. ' },
            { start: '00:14:02', subject: '드라이브 모드', text: '마이 드라이브 모드로 들어가게 되면 스마트 모드가 있어요. 여기서 파워트레인을 노멀이 아니라 스마트로 바꾸면 됩니다. ' },
            { start: '00:16:39', subject: '새로운 기능들', text: '이번에 또 재미난 기능들이 많이 들어왔어요. 이번 그랜저는 연비와 소음 그리고 승차감의 싸움이라고 할 수 있을 정도로 연비에 엄청 신경을 많이 써놨습니다. ' },
            { start: '00:21:50', subject: '정리', text: '2.5는 라이트하면서도 부드럽고 편한 느낌이라면, 3.5 같은 경우에는 럭셔리하면서도 굉장히 고급차의 느낌이 만힝 나는 그런 차라는 생각이 듭니다. ' },

        ]
    },
    {   
        title: '신형 코나 시승기!…소형SUV 싹쓸이할까? 가격만 좀! (Feat.모카 이영빈 작가)',
        date: '2022-12-04',
        brand: '현대',
        model: '코나',
        article_id: 6,
        channelImageUrl: 'https://yt3.ggpht.com/ytc/AL5GRJXaE02Phk_SsOB8I8fwk5IAu-2NENkG3plXdW042A=s68-c-k-c0x00ffffff-no-rj',
        channelName: '김한용의 MOCAR',
        channelId: '@mocar_official',
        videoId: '5RAavx036Is',
        summaries: [
            { start: '00:00:39', subject: '색상', text: '오늘 코나 정말 다양한 색상들의 차가 있거든요. 먼저 어떤 색상들이 있는지부터 살펴보면요, 이거는 에코트로닉 그레이 펄이라고 하는 색깔인데요. 우리가 흔히 아는 쥐색이라고 생각하면 되고요. ' },
            { start: '00:01:57', subject: '디자인', text: '이번 코나 디자인이 정말 마음에 듭니다. 페이스리스트 됐던 그 코나에 비해서 너무너무 예뻐지지 않았습니까. 일단 심리스 호라이즌 램프 예쁘고요. ' },
            { start: '00:04:10', subject: '트렁크', text: '자 그럼 트렁크도 열어보겠습니다. 신형 코나가 모든 면에서 다 커졌어요. 전장도 길어지고 휠베이스도 길어지고, 근데 트렁크 공간은 그렇게까지 커지지는 않았다는 생각이 드네요. ' },
            { start: '00:04:44', subject: '뒷자리', text: '뒷자리에 왔는데요, 1세대 코나에 비해면 이제 좀 살 것 같아요 2열 공간이. 제가 성인 남균 평균보다 훨씬 더 큰 185cm의 키를 가지고 있는데요, 코나가 엄청 길어졌다고 하는데 아직도 셀트스랑 니로보다 작아요. ' },
            { start: '00:05:35', subject: '시승 시작', text: '원래 시승차를 줄 때 특히 SUV들은 4륜구동 옵션이 있으면 4륜구동까지 이렇게 다 넣어 주는 경우가 일반적이거든요. 그런데 이렇게 전륜구동 차량을 줬다, 아무래도 코나가 효율성의 자동차 경제적인 자동차다 보니까. ' },
            { start: '00:07:22', subject: '미션', text: '기존 코나에 들어갔던 미션 7단 DCT미션이었는데요, 이번 신형 코나에 와서는 8단 자동변속기를 쓰다보니까 기어비가 조금 더 촘촘해지고 좀 더 연비의 최적화된 그런 주행을 할 수 있도록 도와주는 변속기가 아닌가 그런 생각이 듭니다. ' },
            { start: '00:08:47', subject: '공인연비', text: '지금 공인연비는 12.2km/L로 인증받았어요. 이것보다 휠이 좀 더 작은 17인치 모델도 있는데요, 17인치 모델의 경우 무려 13km/L로 인증을 받았습니다. ' },
            { start: '00:09:29', subject: '엔진', text: '이 차에는 1.6 터보 스마트 스트림 엔진이 들어가 있잖아요. 1.6 터보 스마트 스트림 엔진은 뭐 많은 분들이 아시겠지만 정말 범용적으로 넓게 사용되는 엔진이거든요. ' },
            { start: '00:11:55', subject: 'NVH 성능', text: 'NVH 성능에 있어서 코나가 진짜 비약적인 발전을 이뤄냈다는 생각이 듭니다. 소음 대책이 정말 좋았어요. 이렇게 좀 불쾌한 도로, 이런 도로에 와서도 잔 소음들을 굉장히 잘 걸러줘서 너무 좋다는 생각이 드는데요. ' },
            { start: '00:15:53', subject: '가격', text: '코나 가솔린의 시작가격 2537만원입니다. 기존 모델 같은 경우는 시작 가격이 2214만원이였거든요. 그러니까 기존 대비해서 기본 모델에서도 323만원이 오른겁니다. ' },
            { start: '00:17:43', subject: '사운드 시스템 체크', text: '기존 코나는 음향이 진짜 아쉬웠어요. 깡통 중에 깡통, 노래는 그냥 백그라운드로 틀어놓은 정도지 음악을 감상한다는건 좀 어려웠거든요. ' },
            { start: '00:18:34', subject: '총평', text: '디올뉴 코나 이번에 타보니까 정말 잘 만들어진 차로 재탄생 했구나 그런 생각이 듭니다. 그런데 가격이 비싸진… 아 이거 어떡할거야?' },
        ]
    },
    {   
        title: '[리뷰] 2023 현대 그랜저 3.5 LPI & 3.5 가솔린 AWD',
        date: '2023-01-08',
        brand: '현대',
        model: '그랜저',
        article_id: 7,
        channelImageUrl: 'https://yt3.googleusercontent.com/JxLCviC3D56QGqysNhKJF3Bi6ei_UrBUlp9-ymMfvd6K9xDgSbNdv_tRitY6lim9BT6eHwiV=s176-c-k-c0x00ffffff-no-rj',
        channelName: '오토뷰(AutoView) - 자동차 구입 참고서',
        channelId: '@autoview2009',
        videoId: 'iLLlIPeHhzc',
        summaries: [
            { start: '00:02:01', subject: '디자인', text: '그랜저는 현대자동차의 최상급 세단인데요, 이에 고급스러운 느낌을 담고자 중후한 매력을 강조하고 있습니다. 스타이라를 눌러 놓은 듯하다는 이야기도 나오는데 출시 시기 영향으로 그랜저가 스타리아 다음으로 나옸을 뿐 향후 출시될 많은 신차들이 이러한 특징을 이어갈 예정입니다. ' },
            { start: '00:03:12', subject: '인테리어', text: '실내는 클래식한 분위기 속에서 고급스러운 모습을 보여주려 했습니다. 수평배치로 실내가 넓어 보이도록 했고요, 기본형 모델에도 12.3인치 계기판과 인포테인먼트 시스템이 탑재되었습니다. ' },
            { start: '00:05:16', subject: '주행', text: '저희가 오늘까지 3일차 테스트를 진행하고 있는데 뭐 마른 노면에서 기본 시험을 했었고 하지만 어제부터 갑자기 눈이 내리기 시작했습니다.             ' },
            { start: '00:06:25', subject: '핸들링', text: '사실 현 세대 차에서 이 정도의 핸들링을 갖고 있는 차는 거의 만나기가 힘들거든요. 안 좋다는 얘기입니다. 하지만 그랜저가 지행햐는 바 이제 현대차의 내부적인 얘기가 되겠지만 이 핸들링 부분을 튜닝하는 그 분도 조금 이제 나이가 좀 많으신 분이에요. ' },
            { start: '00:07:35', subject: '파워트레인', text: '그랜저에는 총 4가지 엔진이 장착됩니다. 기본이 되는 것은 가솔린 2.5이며 198 마력의 최고출력을 갖고 있죠. ' },
            { start: '00:09:13', subject: '서스펜션', text: '서스펜션은 기본 사양과 옵션으로 제공되는 프리뷰 전자제어 서스펜션으로 나뉩니다. 프리뷰 기능은 노면 정보를 읽어 서스펜션을 부드럽게 풀어주는 기능인데요. ' },
            { start: '00:09:54', subject: '타이어', text: '타이어는 사이즈에 따라 다른데 20인치는 피렐리, 19인치는 금호, 넥센은 18인치 제품을 공급하고 있고요. 타이어 성향도 전반적으로 부드러움에 초점을 맞추고 있습니다. ' },
            { start: '00:10:11', subject: '연비', text: '연비도 볼까요. 테스트 결과 그랜저 3.5 가솔린은 막히는 시내 환경에서 약 리터 당 4km 내외의 수준을 보였습니다. 고속도로에서는 최대 리터당 14km를 갈 수 있었고요. ' },
            { start: '00:15:31', subject: '정숙성', text: '수치를 떠나서 사람이 느끼는 만족도도 중요한데 그랜저는 여기서 충분한 경쟁력을 보여주네요. ' },
            { start: '00:18:30', subject: '뒷좌석', text: '자 그리고 뒷좌석 공간, 이 부분에 대한 경쟁력은 충분합니다. 이번 그랜저를 보면은 대기업 임원분들께도 그랜저 많이 지급이 되거든요. ' },
            { start: '00:19:15', subject: '가속성', text: '자 그럼 그랜저 가속성능을 볼까요. 자 저희가 두 가지를 보여드렸는데 확실히 출력이 조금 더 높은 그리고 4륜구동 시스템까지 갖고 있는 3.5L 가솔린 버전이 나은 모습을 보였습니다. ' },
            { start: '00:22:04', subject: '추천 트림', text: '저희 팀이 추천하는 글내저의 구성은 기본형 프리미엄 트림에 프리미엄 초이스 옵션을 추가하는 것입니다. ' },

        ]
    },
    {   
        title: '신형 코나 시승기 // 토션빔, 전륜구동, 1.6터보, 인스퍼레이션, 3420만원',
        date: '2023-01-28',
        brand: '현대',
        model: '코나',
        article_id: 8,
        channelImageUrl: 'https://yt3.googleusercontent.com/KXYwqH_dxv5o-gMN66LQKlYJwqa1Fxq69tW1ZiEnlDYi4miWmjoSX9FapnNUFKUY_Ym2dqmt5Q=s176-c-k-c0x00ffffff-no-rj',
        channelName: 'mediaAUTO 미디어오토',
        channelId: '@mediaAUTO',
        videoId: 'nTv2PFsgd5g',
        summaries: [
            { start: '00:01:04', subject: '디자인', text: '기존 코나의 포인트가 이거였죠, 바퀴를 감싸고 도는 이런 검은색 플라스틱. 이게 차를 상당히 단단해 보이게 한단 말이에요. 바퀴에서 튀는 여러가지 돌이나 이런 것들을 다 이런데서 막아줄거 같은 이런 느낌. ' },
            { start: '00:03:53', subject: '실내', text: '실내는, 실내도 잘 했어요. 일단 키, 그랜저거랑 똑같은 울트란 맨. 근데 여기 옆에 보면은 요런 버튼이 있는 걸로 봐서 원격 주차 보조 기능이 있다는걸 알 수가 있죠. ' },
            { start: '00:06:19', subject: '뒷좌석', text: '100Kg 형님이 몰고 있어도, 100Kg 아저씨가 또 탈 수 있어요 이렇게 주먹 두개 들어가고. 아, 이 정도면 뭐 가족형 차로 부족하지 않아요. ' },
            { start: '00:07:43', subject: '트렁크', text: '자, 그리고 트렁크를 빨리 보고 갑시다. 트렁크도 뭐 널찍해요, 그냥 i30 정도의 트렁크 공간 나옵니다. 자 그리고 여기 넓어요, 여기에 짐 다 넣을 수 있을거 같아. ' },
            { start: '00:08:15', subject: '엔진', text: '1.6L 가솔린 터보엔진에 8단 자동변속기가 들어간 신형 코나입니다. 요 파워트레인은 지난 여름에 시승했었던 셀토스 부분변경 모델부터 들어갔었던 그 파워트레인이랑 겹칩니다. ' },
            { start: '00:09:07', subject: '사운드시스템', text: '보스 오디오가 들어가 있어요. 스피커가 그렇게 많이 들어간건 아니더라고요. 한 스피커 6~8개 정도 들어간거 같습니다. ' },
            { start: '00:09:57', subject: '드라이브 모드', text: '일단 에코 모드, 노멀 모드, 스포츠 모드가 있는데 그냥 노말 모드로만 해볼게요. 예, 일단 30Km/h로 가 보겠습니다. 어 이게 토션빔 서스펜션 들어간거 치고는 승차감이 괜찮거든요. ' },
            { start: '00:14:15', subject: '제로백', text: '자 여기서부터 해보겠습니다, 7.62초! 셀토스보다 빠르네. 여름이랑 겨울의 차이는 좀 감안하셔서 봐야하는데 7.6초면은 괜찮은데요. ' },
        ]
    },
];

articles = articles.map((a, i) => {
    a.id = i + 1;
    a.summaries = a.summaries.map(s => {
        s.start = timestamp2seconds(s.start);
        return s;
    });
    return a;
});

let brands = [
    { 
        logo: 'hyundai.svg', name: '현대', nameEng: 'HYUNDAI',
        models: [
            { 
                name: '쏘렌토',
                submodel: '4세대',
                specs: [
                    { field: '코드네임', description: '진짜 코드 네임' },
                ]
            },
        ]
    },
    { logo: 'kia.svg', name: '기아', nameEng: 'KIA' },
    { logo: 'genesis.svg', name: '제네시스', nameEng: 'GENESIS' },
    { logo: 'ssangyong.svg', name: '쌍용', nameEng: 'SSANGYONG' },
    { logo: 'bmw.svg', name: 'BMW', nameEng: 'BMW' },
    { logo: 'benz.svg', name: '벤츠', nameEng: 'BENZ' },
    { logo: 'audi.svg', name: '아우디', nameEng: 'AUDI' },
    { logo: 'tesla.svg', name: '테슬라', nameEng: 'TESLA' },
    // { logo: 'volkswagen.svg', name: '폭스바겐', nameEng: 'VOLKSWAGEN' },
    // { logo: 'volvo.svg', name: '볼보', nameEng: 'VOLVO' },
];

brands = brands.map((b, i) => {
    b.id = i + 1;
    return b;
});

const colors = {
    primary: '#2B6F7D',
    primaryDark: '#183D44',
    primaryLight: '#99D0DC',
    primaryBG: '#E0ECEE',
    darkPrimary: '#4DAEC2',

    _000: '#000000',
    _100: '#121212',
    _200: '#212121',
    _300: '#424242',
    _400: '#616161',
    _500: '#919191',
    _600: '#BDBDBD',
    _700: '#DBDBDB',
    _800: '#E5E5E5',
    _900: '#F5F5F5',
    _1000: '#FFFFFF',
};

export {
    articles, brands, colors, timestamp2seconds, seconds2timestamp,
};