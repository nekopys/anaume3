$(document).ready(function() {
	
	var user_id;
	var url_get_val_array = window.location.search.substring(1).split('=');//---------URL_GETでの受取を想定
	
	if(url_get_val_array[0] == 'id'){
		user_id = url_get_val_array[1];
	}
	
	var i;
	var i2;
	var i3;
	var j;
	
	//var page_data_array = new Array();//ページ追加で増える
	var overBlack = $('.overBlack');
	var vew_flag = false;//------sakuseiかplayVewか
	
	var bnMenu = $('.bnMenu');
	var bnLogout = $('.bnLogout');
	
	var img = $('#img');
	
	var curr_textbox = $('.model1Textbox1');
	
	
	
	
	var ps_is = true;
	var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        ps_is = false;
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        ps_is = false;
    }
	
	
	var ie_is = false;
	
    ua = window.navigator.userAgent.toLowerCase();
    var ver = window.navigator.appVersion.toLowerCase();
    var name = 'unknown';

    if (ua.indexOf("msie") != -1){
        if (ver.indexOf("msie 6.") != -1){
            name = 'ie6';
        }else if (ver.indexOf("msie 7.") != -1){
            name = 'ie7';
        }else if (ver.indexOf("msie 8.") != -1){
            name = 'ie8';
        }else if (ver.indexOf("msie 9.") != -1){
            name = 'ie9';
        }else if (ver.indexOf("msie 10.") != -1){
            name = 'ie10';
        }else{
            name = 'ie';
        }
    }else if(ua.indexOf('trident/7') != -1){
        name = 'ie11';
    }else if (ua.indexOf('chrome') != -1){
        name = 'chrome';
    }else if (ua.indexOf('safari') != -1){
        name = 'safari';
    }else if (ua.indexOf('opera') != -1){
        name = 'opera';
    }else if (ua.indexOf('firefox') != -1){
        name = 'firefox';
    }
    if(name.substr(0,2) == "ie"){
		ie_is = true;
	}
	
	//ie_is = false;//-------------------------------------------------IEテスト用
	
	var play_page_is = false;//----menuページはfalse,playのページに入ったらtrue;
	
	/*var play_tempo = $('.play_tempo');
	var play_time_m = $('.play_time_m');
	var play_time_s = $('.play_time_s');
	var jun;
	var play_boxPlaybn = $('.play_boxPlaybn');*/
	
	
	
	
	var edu_menu = $('.edu_menu');
	var mainBox = $('.mainBox');
	var menu1Ul = $('.menu1Ul');
	var bnModoru = $('.bnModoru');
	
	var file_num_dasi = $('.file_num_dasi');
	
	var model1Imgbox = $('.model1Imgbox');//----------画像
	var model1Textbox = $('.model1Textbox');//--------文字
	var husen_x;
	var husen_y;
	
	var gamen_w = $(window).width();
	var gamen_h = $(window).height();
	
	var husen_aja_x = 15;//----?
	var husen_aja_y = 74;//----?
	
	var timer = false;
	var resize_play_flag = true;
	
	var husen1;
	var husen2;
	var husen3;
	var husen4;
	var husen5;
	var husen6;
	var husen7;
	var husen8;
	var husen9;
	var husen10;
	var husen_array = new Array(husen1,husen2,husen3,husen4,husen5,husen6,husen7,husen8,husen9,husen10);
	
	//---------
	
	var play_tempo = $('.play_tempo');
	var play_time_m = $('.play_time_m');
	var play_time_s = $('.play_time_s');
    var radio_tempo = $('.radio_tempo');
	var radio_seigen = $('.radio_seigen');
	var jun;
	var play_boxPlaybn = $('.play_boxPlaybn');
	var junBn_jun = $('.junBn_jun');
	var junBn_back = $('.junBn_back');
	var junBn_random = $('.junBn_randum');
	var oto1 = $('.oto1');
	var oto2 = $('.oto2');
	var oto3 = $('.oto3');
	var oto4 = $('.oto4');
	var sounds = new Audio();
	sounds.preload = "metadata";
	var sound_num = 0;
	var sound_sorce1 = "sound/sound1.mp3";
	var sound_sorce2 = "sound/sound2.mp3";
	var sound_sorce3 = "sound/sound3.mp3";
	var sound_sorce_array = new Array(sound_sorce1,sound_sorce2,sound_sorce3);
	var sound_end = new Audio();
	sound_end.src= "sound/sound_end.mp3";
	var time_up_text = $('.time_up_text');
	var menu_edu_honban = $('.menu_edu_honban');
	
	
	var playBatuBn = $('.playBatuBn');
	var playNextBn = $('.playNextBn');
	var playBackBn = $('.playBackBn');
	var play_num = 0;//--------------------------------
	var game_is_temp;
	var playBatuBn2 = $('.playBatuBn2');
	
	//var sound_on = false;
	
	var play_tempo_val;
	var play_time_m_val;
	var play_time_s_val;
	var times_first = true;
	var play_type;//----tempo,seigen,syudo
	
	
	//--------TEST用
	
	/*edu_menu.css("display","none");
		mainBox.css("display","block");
		menu1Ul.css("display","block");*/
	
	
	//---------------------------------------DATAの取り込み.ここから---------------------------
	
	/*var page_jun_array = new Array();//-----ランダム等があるので
	var page_suu;
	var save_text_datas;
	var currFontSize;
	var save_img_fileName;
	var save_imgBox_size_array;
	var img_marginH;
	var img_houkou;
	var save_husen_data_array;
    var gazou_aspect;
	
	var save_text_datas_array = new Array();
	var currFontSize_array = new Array();
	var save_img_fileName_array = new Array();
	var save_imgBox_size_arrays = new Array();
	var img_marginH_array = new Array();
	var img_houkou_array = new Array();
	var save_husen_data_arrays = new Array();*/
	
	
	
	
	
	//--new
	//var page_num_array = new Array();
	//page_num_array[0] = 0;
	
	var page_jun_array = new Array();//-----ランダム等があるので
	var page_suu;
	var save_text_datas;
	var data_currFontSize;
	var save_img_fileName;
	var save_imgBox_size_array;
	var img_marginH;
	var img_houkou;
	var save_husen_data_array;
    var gazou_aspect;
	
	
	var save_file_tit_array = new Array();
	var save_text_datas_array = new Array();
	var curr_textbox_h_array = new Array();
	var currFontSize_array = new Array();
	var currTextarea_data_array = new Array();
	var save_img_fileName_array = new Array();
	var gazou_aspect_array = new Array();
	var save_imgBox_size_arrays = new Array();
	var img_marginH_array = new Array();
	var img_houkou_array = new Array();
	var save_husen_data_arrays = new Array();
	var prevew_data_array = new Array();
	
	//----------------------------
	
	var id_data = "12345";
	var pass = "12345";
	var user_name = "12345";
	
	$.ajax({
        type: "POST",
        url: "cgi-bin/dataout.php",
        data:{
            id:id_data,
		    pass:pass,
		    user:user_name
        },
        crossDomain: false,
        dataType : "json",
        scriptCharset: 'utf-8'
			
    }).done(function(data){
		
	    //alert(JSON.stringify(data.texts));
		data_ins(data);
               
    }).fail(function(XMLHttpRequest, textStatus, errorThrown){
			
        alert("ERR----" + errorThrown);
    });
	
	//-----------------------------
	
	function data_ins(data){
		
		//alert(JSON.stringify(data.texts));//------arrデータの取り方が分からない場合、こいつを解析分解するか
		
		var pageName;
		var arr1 = new Array();
		var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10;
		page_suu = data.pagesuu;
	
		for(i = 0;i < page_suu;i++){

			pageName = "page" + (i+1);

			save_file_tit_array[i] = data[pageName].title;
		    save_text_datas_array[i] = data[pageName].texts;
		    curr_textbox_h_array[i] = data[pageName].texth;
		    currFontSize_array[i] = data[pageName].size;
		    currTextarea_data_array[i] = data[pageName].textarea;
		    save_img_fileName_array[i] = data[pageName].imgname;
		    gazou_aspect_array[i] = data[pageName].aspect;
			
			d1 = data[pageName].imgbox.d1;
			d2 = data[pageName].imgbox.d2;
		    save_imgBox_size_arrays[i] = new Array(d1,d2);
			
		    img_marginH_array[i] = data[pageName].marginh;
		    img_houkou_array[i] = data[pageName].tateyoko;
		
			d1 = data[pageName].husen.d1;
			d2 = data[pageName].husen.d2;
			d3 = data[pageName].husen.d3;
			d4 = data[pageName].husen.d4;
			d5 = data[pageName].husen.d5;
			d6 = data[pageName].husen.d6;
			d7 = data[pageName].husen.d7;
			d8 = data[pageName].husen.d8;
			d9 = data[pageName].husen.d9;
			d10 = data[pageName].husen.d10;
		    save_husen_data_arrays[i] = new Array(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10);
	
		    prevew_data_array[i] = data[pageName].prevew_data;
	
		}
		
		

		var img_pass;
		for(i = 0;i < save_img_fileName_array.length;i++){
			img_pass = "image/" + save_img_fileName_array[i];
			$("<img>").attr("src", img_pass );
		}
		
		img_moji_ypos();
		
		/*for(i = 0;i < page_suu;i++){
		    page_num_array[i] = i;
		}
	
		ichiran_data_in();
		
		//----------------------------------------
		
		img_setumei.css("display","none");
		pre_text = false;
		text_first = false;
		for(i = 0;i < prevew_data_array.length;i++){//プレビュー画面
		    page_data_array[i] = prevew_data_array[i];
		}
		
		hensyu_start(0);//----------------- ←編集スタート*/
		
		
		
		/*var d1 = data.title.data1;
		var d2 = data.title.data2;
		var d3 = data.title.data3;
		var d4 = data.title.data4;
		var d5 = data.title.data5;
		var d6 = data.title.data6;
		save_file_tit_array = new Array(d1,d2,d3,d4,d5,d6);
		
		d1 = data.texts.data1;
		d2 = data.texts.data2;
		d3 = data.texts.data3;
		d4 = data.texts.data4;
		d5 = data.texts.data5;
		d6 = data.texts.data6;
		save_text_datas_array = new Array(d1,d2,d3,d4,d5,d6);
		
		d1 = data.size.data1;
		d2 = data.size.data2;
		d3 = data.size.data3;
		d4 = data.size.data4;
		d5 = data.size.data5;
		d6 = data.size.data6;
		currFontSize_array = new Array(d1,d2,d3,d4,d5,d6);
		
		d1 = data.textarea.data1;
		d2 = data.textarea.data2;
		d3 = data.textarea.data3;
		d4 = data.textarea.data4;
		d5 = data.textarea.data5;
		d6 = data.textarea.data6;
		currTextarea_data_array = new Array(d1,d2,d3,d4,d5,d6);
		
		
		
		d1 = data.imgname.data1;
		d2 = data.imgname.data2;
		d3 = data.imgname.data3;
		d4 = data.imgname.data4;
		d5 = data.imgname.data5;
		d6 = data.textarea.data6;
		save_img_fileName_array = new Array(d1,d2,d3,d4,d5,d6);
		
		gazou_aspect = data.aspect;
		
		var md1 = data.imgbox.data1.d1;
		var md2 = data.imgbox.data1.d2;
		var arr1 = new Array(md1,md2);
		md1 = data.imgbox.data2.d1;
		md2 = data.imgbox.data2.d2;
		var arr2 = new Array(md1,md2);
		md1 = data.imgbox.data3.d1;
		md2 = data.imgbox.data3.d2;
		var arr3 = new Array(md1,md2);
		md1 = data.imgbox.data4.d1;
		md2 = data.imgbox.data4.d2;
		var arr4 = new Array(md1,md2);
		md1 = data.imgbox.data5.d1;
		md2 = data.imgbox.data5.d2;
		var arr5 = new Array(md1,md2);
		md1 = data.imgbox.data6.d1;
		md2 = data.imgbox.data6.d2;
		var arr6 = new Array(md1,md2);
		save_imgBox_size_arrays = new Array(arr1,arr2,arr3,arr4,arr5,arr6);
		
		d1 = data.marginh.data1;
		d2 = data.marginh.data2;
		d3 = data.marginh.data3;
		d4 = data.marginh.data4;
		d5 = data.marginh.data5;
		d6 = data.marginh.data6;
		img_marginH_array = new Array(d1,d2,d3,d4,d5,d6);
		
		d1 = data.tateyoko.data1;
		d2 = data.tateyoko.data2;
		d3 = data.tateyoko.data3;
		d4 = data.tateyoko.data4;
		d5 = data.tateyoko.data5;
		d6 = data.tateyoko.data6;
		img_houkou_array = new Array(d1,d2,d3,d4,d5,d6);
		
		md1 = data.husen.data1.d1;
		md2 = data.husen.data1.d2;
		var arr1 = new Array(md1,md2);
		md1 = data.husen.data2.d1;
		var arr2 = new Array(md1);
		md1 = data.husen.data3.d1;
		var arr3 = new Array(md1);
		md1 = data.husen.data4.d1;
		var arr4 = new Array(md1);
		md1 = data.husen.data5.d1;
		var arr5 = new Array(md1);
		md1 = data.husen.data6.d1;
		var arr6 = new Array(md1);
		save_husen_data_arrays = new Array(arr1,arr2,arr3,arr4,arr5,arr6);*/
		
	
		
		
	}
	
	
	//-----------------------------
	
	
	
	
	/*//------TEXT
	save_text_datas_array = new Array('パ<p class="ana ana1">ン</p>ダ',
	'キ<p class="ana ana1">リ</p>ン','ライ<p class="ana ana2">オン</p>','カ<p class="ana ana4">ン</p>ガ<p class="ana ana3">ル</p>ー','<span class="B">う</span><span class="B">さ</span><span class="B">ぎ</span>の<span class="B R">耳</span>は<br><span class="B">ど</span><span class="B">ん</span><span class="B">な</span><span class="B R">耳</span>？','<span class="B">パ</span><span class="K  B">ン</span><span class="B">ダ</span><span class="B">は</span><span class="B">、</span><br><span class="R   B">何</span><span class="R B">色</span><span class="B">と</span><span class="R B">何</span><span class="R B">色</span><span class="B">？</span>');
	currFontSize_array = new Array(11,11,9,7,6,6);
	page_suu = save_text_datas_array.length;
	
	//----画像
	save_img_fileName_array = new Array('panda.jpg','kirin.jpg','lion.jpg','kangaroo.jpg','usagi.jpg','panda.jpg');
	gazou_aspect = 1.23;
	
	var dumm_arr1 = new Array(592,523);
	var dumm_arr2 = new Array(542,497);
	var dumm_arr3 = new Array(542,497);
	var dumm_arr4 = new Array(542,497);
	var dumm_arr5 = new Array(542,497);
	var dumm_arr6 = new Array(542,497);
	save_imgBox_size_arrays = new Array(dumm_arr1,dumm_arr2,dumm_arr3,dumm_arr4,dumm_arr5,dumm_arr6);
	
	img_marginH_array = new Array('2vh',0,0,0,0,0);
	img_houkou_array = new Array('yoko','tate','tate','tate','tate','tate');
	
	//----ふせん
	dumm_arr1 = new Array('1-0-0-590-521','1-59-39-272-100');
	dumm_arr2 = new Array('');
	dumm_arr3 = new Array('');
	dumm_arr4 = new Array('');
	dumm_arr5 = new Array('160-237-255-179');
	dumm_arr6 = new Array('158-123-567-522');
	save_husen_data_arrays = new Array(dumm_arr1,dumm_arr2,dumm_arr3,dumm_arr4,dumm_arr5,dumm_arr6);*/
	
	//---------------------------------------DATAの取り込み.ここまで---------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	//------------------------------------MENUページ.ここから--------------------------
	
	
	
	//new Array("sound/sound1.mp3","sound/sound2.mp3","sound/sound3.mp3");
	for(i = 0;i < sound_sorce_array.length;i++){
		sounds.src = sound_sorce_array[i];
	    sounds.load();
	}
	
	$( 'input[name="radio_edu_flag"]:radio' ).change( function() {
		play_type = $( this ).val();
    });
	
	
	junBn_jun.on('click',function(){
        jun = "jun";
    });
	junBn_back.on('click',function(){
        jun = "back";
    });
	junBn_random.on('click',function(){
        jun = "random";
    });
	
	oto1.on('click',function(){
        sound_num = 0;
		sounds.src = sound_sorce_array[0];
		sounds.play();
		
    });
	oto2.on('click',function(){
        sound_num = 1;
		sounds.src = sound_sorce_array[1];
		sounds.play();
    });
	oto3.on('click',function(){
        sound_num = 2;
		sounds.src = sound_sorce_array[2];
		sounds.play();
    });
	oto4.on('click',function(){
        sound_num = 3;
		/*sounds.src = sound_sorce[sound_num];
		sounds.play();*/
    });
	
	
	/*play_tempo.click(function(){
		play_time_m.val("");
		play_time_s.val("");
	});
	play_time_m.click(function(){
		play_tempo.val("");
	});
	play_time_s.click(function(){
		play_tempo.val("");
	});*/
	
	/*play_tempo.on('keydown', function(e) {
        var k = e.keyCode;
        // 0～9, テンキ―0～9, スペース, backspace, delete, →, ←, 以外は入力キャンセル
        //if(!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 32 || k == 8 || k == 46 || k == 39 || k == 37)) {
		if(!((k >= 48 && k <= 57) || (k >= 96 && k <= 105))) {
            return false;
        }
    });
    play_time_m.on('keydown', function(e) {
        var k = e.keyCode;
		if(!((k >= 48 && k <= 57) || (k >= 96 && k <= 105))) {
            return false;
        }
    });
	play_time_s.on('keydown', function(e) {
        var k = e.keyCode;
		if(!((k >= 48 && k <= 57) || (k >= 96 && k <= 105))) {
            return false;
        }
    });*/
	play_tempo.click(function(){
		radio_tempo.attr("checked", true);
		play_type = "tenpo";
	});
	play_time_m.click(function(){
		radio_seigen.attr("checked", true);
		play_type = "seigen";
	});
	play_time_s.click(function(){
		radio_seigen.attr("checked", true);
		play_type = "seigen";
	});
	
	
	play_boxPlaybn.click(function(){
		
		play_tempo_val = play_tempo.val();
		play_time_m_val = play_time_m.val();
		play_time_s_val = play_time_s.val();
        
		if(play_type == "tempo"){
		    if(play_tempo_val == ""){
			    alert("テンポ時間（出題の間隔）を記入してください。");
			    return;
		    }
		    if(isNaN(play_tempo_val)){
			    alert("数字を入力してください。");
			    return;
		    }
			 if(play_tempo_val <= 0){
			    alert("テンポ時間（出題の間隔）は０より大きな数字を入力してください。");
			    return;
		    }
		}
		if(play_type == "seigen"){
			
			if(play_time_m_val == "" && play_time_s_val == ""){
			    alert("制限時間（全問題を終了させる時間）を記入してください。");
				return;
			}
			if(isNaN(play_time_m_val) || isNaN(play_time_s_val)){
			    alert("数字を入力してください。");
				return;	
			}
			if(play_time_m_val <= 0 && play_time_s_val <= 0){
			    alert("０より大きな数字を入力してください。");
				return;	
			}
		}
		play_tempo_val = Number(play_tempo_val);
		play_time_m_val = Number(play_time_m_val);
		play_time_s_val = Number(play_time_s_val);
		
		play_num = 0;
		overBlack_start(true);
	});
	
	bnModoru.click(function(){
		if(play_page_is){
			menu_page_start();
		}
	});
	

	//------------------------------------MENUページ.ここまで--------------------------
	
	//---------------------------------------------------------------------プレビュー.ここから
	//---------------Play Vew / sakusei Vew
	
	//var play_html;

	/*play_boxPlaybn.click(function(){
		//play_html = model1.html();
	
		//var n = page_data_array.length;
		//page_data_array.push(play_html);
	    if(page_data_array.length > 0){
			play_num = 0;
		    overBlack_start();
		}else{
			alert("プレビューするデータがありません。(データを保存する必要があります)");
		}
	});*/
	
	function overBlack_start(flag){
		overBlack.css("display","block");
		overBlack.css("opacity",0);

		if(flag){
		    sounds.pause();
            sounds.currentTime = 0;
            if(sound_num != 3){
		        sounds.play();//----------sound;
		    }
		}
		
		overBlack.stop().animate({
			opacity:1,
			queue:false
		}, {
			'duration': 300,
			'complete': function(){
		        playNextBn.css("display","block");
		        playBackBn.css("display","block");
				if(!play_page_is){
				    playVew_start();//-----------------------------menuからプレビューへ
				}else{
					gamen_sakusei();//-------------------------------始まっている。次のページの画面作成
				}
				
				overBlack_end(1);
			}	
		});
	}
	
	function overBlack_end(flag){
	
		overBlack.stop().animate({
			opacity:0,
			queue:false
		}, {
			'duration': 300,
			'complete': function(){
				overBlack.css("display","none");
				          //alert($('.model1').html());
				if(flag == 1){//------game_start
				    
					timer_start();
					
				}else{
					
				}
			}	
		});
	}
	
	var timers;
	
    function timer_start(){

		/*play_tempo_val;
		game_is_temp = true;
	
		play_time_m_val;
		play_time_s_val;*/
		
	    var t;
		
		if(play_type == "tempo"){
			
			if(play_num+1 < page_jun_array.length){
				play_num++;
			    timers = setTimeout(function(){			
                    overBlack_start(true);
                },play_tempo_val*1000);
			}
			
		}else if(play_type == "seigen"){

			if(times_first){
			
				t = (play_time_m_val*60 + play_time_s_val)*1000;				
				timers = setTimeout(function(){			
                    game_end();
                },t);
			}
		}
	}
	
	function game_end(){
	
		sound_end.play();
		overBlack.css("display","block");
		overBlack.css("opacity",0);
		time_up_text.css("display","block");
		time_up_text.css("opacity",0);
		times_first = false;
		
		overBlack.stop().animate({
			opacity:0.7,
			queue:false
		}, {
			'duration': 300,
			'complete': function(){
		       
			}	
		});
		time_up_text.stop().animate({
			opacity:1,
			queue:false
		}, {
			'duration': 300,
			'complete': function(){
		       
			}	
		});
		
		//sound_on = false;
	}
	
	playBatuBn.click(function(){//-----時間決めの最初の画面
		
		play_page_is = false;
		clearTimeout(timers);
		
		time_up_text.css("display","none");
		menu_edu_honban.css("display","none");
		overBlack.css("display","none");
        edu_menu.css("display","block");
		mainBox.css("display","none");
		menu1Ul.css("display","none");
	});
	playBatuBn2.click(function(){//-----時間決めの最初の画面
	
	    play_page_is = false;
		clearTimeout(timers);
		
		time_up_text.css("display","none");
		menu_edu_honban.css("display","none");
		overBlack.css("display","none");
        edu_menu.css("display","block");
		mainBox.css("display","none");
		menu1Ul.css("display","none");
	});
	
	
	//---------------------------------------START------------------------------
	function playVew_start(){
		
        play_page_is = true;
		times_first = true;
		//sound_on = true;
		
	    for(i = 0;i < page_suu;i++){
			page_jun_array[i] = i;
	    }
	
	    if(jun == "back"){
			page_jun_array.reverse();
			
		}else if(jun == "random"){
            page_jun_array = page_jun_array.sort(shuffle);
		}

		edu_menu.css("display","none");
		mainBox.css("display","block");
		menu1Ul.css("display","block");
		menu_edu_honban.css("display","block");
		
		gamen_sakusei();//-------------------------画面作成呼び出し----------------
		
		
	
	}
	var shuffle = function() {return Math.random()-.5};
	
	function menu_page_start(){
		play_page_is = false;
		edu_menu.css("display","block");
		mainBox.css("display","none");
		menu1Ul.css("display","none");
	}
	
	
	playNextBn.click(function(){
		if(play_num < page_jun_array.length-1){
			play_num++;
			overBlack_start(true);//-----画面切り替わり
		}
	});
	playBackBn.click(function(){
		if(play_num > 0){
			play_num--;
			overBlack_start(true);//-----画面切り替わり
		}
	});
	
	//----------------------------------------------プレビューここまで
	
	
	//-----------------------------------------------画面作成.ここから------------------------！！！！！！！
	
	function gamen_sakusei(){
		
		/*sounds.pause();
        sounds.currentTime = 0;
        if(sound_num != 3){
		    sounds.play();//----------sound;
		}*/

		//times_first = false;
		//page_jun_array[play_num];
		var nums = page_jun_array[play_num];
	
	    var type;
		var husen_top;
		var husen_left;
		var husen_w;
		var husen_h;
		var dumm_array = new Array();
		var dumm_array2;
		var font_size;
	
		model1Imgbox = $('.model1Imgbox');//----------画像
	    model1Textbox = $('.model1Textbox');
	
		curr_textbox = $('.model1Textbox1');
		//----------------ナンバー振り
		
		file_num_dasi.text((play_num+1) + " / " + page_jun_array.length);
	
	    //----------------テキスト
		
		$('.model1Textbox1').html(save_text_datas_array[nums]);
		//curr_textbox_h();
	
		curr_textbox.css('marginTop',curr_textbox_h_array[nums]);
	
		font_size = currFontSize_array[nums] + "vw";
		curr_textbox.css("fontSize",font_size);
		curr_textbox.css("fontFamily",'"ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝B", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif');
		
		//----------------画像
		
		var w = vw_dasi(save_imgBox_size_arrays[nums][0]) + "vw";
		var h = vh_dasi(save_imgBox_size_arrays[nums][1]) + "vh";

		model1Imgbox.css("width",w);
		model1Imgbox.css("height",h);
		
		img_marginH = img_marginH_array[play_num];
	
		if(gazou_aspect_array[play_num] >= model1Imgbox.width()/model1Imgbox.height()){//----枠に対して、写真は横長
	
			img.css("width","100%");
			img.css("height","auto");
			
			//img_houkou = "yoko";
			//img_marginH = Math.floor(vh_dasi((model1Imgbox.height() - img.height())/2)) + "vh";//------???
			//img_marginH = Math.floor(vh_dasi((model1Imgbox.height() - img.height())/2)) + "vh";
			img.css("marginTop",img_marginH);
		
		}else{
	
			img.css("height","100%");
			img.css("width","auto");	
					
			//img_houkou = "tate";
			img_marginH = 0;
			img.css("marginTop",0);		
		}
	
	

		if(save_img_fileName_array[nums] != ""){
			save_img_fileName = "image/" + save_img_fileName_array[nums];
		    img.attr('src',save_img_fileName);
		}
	
		curr_textbox_h();
		
		//-----------------ふせん
		
		husen1 = $('.husen1');
	    husen2 = $('.husen2');
	    husen3 = $('.husen3');
	    husen4 = $('.husen4');
	    husen5 = $('.husen5');
	    husen6 = $('.husen6');
	    husen7 = $('.husen7');
	    husen8 = $('.husen8');
	    husen9 = $('.husen9');
	    husen10 = $('.husen10');
	    husen_array = new Array(husen1,husen2,husen3,husen4,husen5,husen6,husen7,husen8,husen9,husen10);
	
	    dumm_array = save_husen_data_arrays[nums];
	
		
		for(i = 0;i < dumm_array.length;i++){
			if(dumm_array[i] != ''){
				
			    dumm_array2 = dumm_array[i].split("-");
				
				type = Number(dumm_array2[0]);
			    husen_top = Number(dumm_array2[1]);
			    husen_left = Number(dumm_array2[2]);
			    husen_w = Number(dumm_array2[3]);
			    husen_h = Number(dumm_array2[4]);
				
				/*alert(type);
				alert(husen_top);
				alert(husen_left);
				alert(husen_w);
				alert(husen_h);
				alert("-------");*/
	
				
				
				if(type == 1){
				    husen_top =  vh_dasi(model1Imgbox.offset().top) + husen_top + "vh";
			        husen_left = vw_dasi(model1Imgbox.offset().left) + husen_left + "vw";
				}else if(type == 2){
				    husen_top =  vh_dasi(model1Imgbox.offset().top) + husen_top + "vh";
			        husen_left = vw_dasi(model1Imgbox.offset().left) - husen_left + "vw";
				}else if(type == 3){
				    husen_top =  vh_dasi(model1Imgbox.offset().top) - husen_top + "vh";
			        husen_left = vw_dasi(model1Imgbox.offset().left) - husen_left + "vw";
				}else if(type == 4){
				    husen_top =  vh_dasi(model1Imgbox.offset().top) - husen_top + "vh";
			        husen_left = vw_dasi(model1Imgbox.offset().left) + husen_left + "vw";
				}
				
			    husen_w = vw_dasi(husen_w) + "vw";
			    husen_h = vh_dasi(husen_h) + "vh";
	
			    husen_array[i].css("display","block");
			    husen_array[i].css("top",husen_top);//-----11--???///var husen_aja_y = 74;//----?
			    husen_array[i].css("left",husen_left);
			    husen_array[i].css("width",husen_w);//------------2---??
			    husen_array[i].css("height",husen_h);
				
			}else{
				husen_array[i].css("display","none");
			}
		}
	}
	
	
	//curr_textbox_h();
	function curr_textbox_h(){
		
		//alert(curr_textbox.height());
		//alert($(window).height());
		var h = ($(window).height())/2 - curr_textbox.height()/2 - 80;
		h = vh_dasi(h) + "vh";
	    curr_textbox.css('margin-top',h);
		
		//-----画像
		var height_aja = 63;//headerの高さ
		var dumm_top = ($(window).height()-model1Imgbox.height())/2;
	    dumm_top = Math.floor((dumm_top-height_aja)/$(window).height()*100) + "vh";
	    $('.model1Imgbox').css("margin-top",dumm_top);
			
	}
		
	
	//-----------------------------------------------画面作成.ここまで------------------------



    //-------------ふせんクリック
	
	$('.husen1').on('click', function() {
        $('.husen1').css("display","none");
    });
	$('.husen2').on('click', function() {
        $('.husen2').css("display","none");
    });
	$('.husen3').on('click', function() {
        $('.husen3').css("display","none");
    });
	$('.husen4').on('click', function() {
        $('.husen4').css("display","none");
    });
	$('.husen5').on('click', function() {
        $('.husen5').css("display","none");
    });
	$('.husen6').on('click', function() {
        $('.husen6').css("display","none");
    });
	$('.husen7').on('click', function() {
        $('.husen7').css("display","none");
    });
	$('.husen8').on('click', function() {
        $('.husen8').css("display","none");
    });
	$('.husen9').on('click', function() {
        $('.husen9').css("display","none");
    });
	$('.husen10').on('click', function() {
        $('.husen10').css("display","none");
    });
	
	

	
	
	$( window ).resize(function(e){
		
		if(e.clientX > 0){//--------ウインドウのリサイズのみで以下を検出する
			return;
		}

        resize_open();
		img_moji_ypos();
		
		if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
			resize_play_flag = true;
        }, 2000);
    });
	
	var resizeTimer = null;
	
	var font_top;
	var font_left;
	var foucs_is = false;
	
	var dumm_top;
	var dumm_left;
	var dumm_h;
	var dumm_w;
	var height_aja;
	var husen_left;
	var husen_top;
	var model_left;
	var model_top;
	//var curr_husen_top;
	//var curr_husen_left;
	
	var hirituW_array;
	var hirituH_array;
	var model1Ul_x;
	var model1Ul_y;
	var hirituW_type_array;
	var hirituH_type_array;
	var husen_is_num_array;
	
	
	var dumm_array = new Array();
	
	//img_moji_ypos();
	
	function resize_open(){

		if(resize_play_flag){
			resize_play_flag = false;
			
			hirituW_array = new Array();
			hirituH_array = new Array();
			hirituW_type_array = new Array();
			hirituH_type_array = new Array();
			husen_is_num_array = new Array();
			
			model_left = model1Imgbox.offset().left;
			model_top = model1Imgbox.offset().top;
			
			for(i = 0;i < husen_state_array.length;i++){
				if(husen_state_array[i]){
					
					husen_is_num_array.push(i);
			
			        husen_left = husen_array[i].offset().left;
			        husen_top = husen_array[i].offset().top;
			
			        if(husen_left - model_left >= 0){
				        hirituW_type_array.push(1);
			        }else{
				        hirituW_type_array.push(2);
			        }
			        if(husen_top - model_top >= 0){
						hirituH_type_array.push(1);
			        }else{
				        hirituH_type_array.push(2);
			        }

			        var w = (Math.abs(husen_left - model_left))/$(window).width();
			        var h = (Math.abs(husen_top - model_top))/$(window).height();
			
			        hirituW_array.push(w);
			        hirituH_array.push(h);
				}
			}
		}
	}

	function img_moji_ypos(){//画像と文字のy位置をセンターにする

	    //if(!resize_play_flag)
	
	    height_aja = 63;//headerの高さ
	    
		//-----文字
        dumm_top = ($(window).height()-model1Textbox.height())/2;
	    dumm_top =  Math.floor((dumm_top-height_aja)/$(window).height()*100) + "vh";
	    model1Textbox.css("margin-top",dumm_top);
		
		//-----画像
		dumm_top = ($(window).height()-model1Imgbox.height())/2;
	    dumm_top = (dumm_top-height_aja)/$(window).height()*100 + "vh";
	    model1Imgbox.css("margin-top",dumm_top);
	
		
		//----------
		if(gazou_aspect_array[play_num] >= model1Imgbox.width()/model1Imgbox.height()){//----枠に対して、写真は横長
			img.css("width","100%");
			img.css("height","auto");
					
			img_marginH = Math.floor(vh_dasi((model1Imgbox.height() - img.height())/2)) + "vh";
			img.css("marginTop",img_marginH);
		}else{
	
			img.css("height","100%");
			img.css("width","auto");	
				
			img_marginH = 0;
			img.css("marginTop",0);		
		}
		//----------
		
		/*var height_aja = 63;//headerの高さ
		var dumm_top = ($(window).height()-model1Imgbox.height())/2;
	    dumm_top = Math.floor((dumm_top-height_aja)/$(window).height()*100) + "vh";
	    $('.model1Imgbox').css("margin-top",dumm_top);*/
		
	
	
		//----ふせんの位置
		model_left = model1Imgbox.offset().left;
		model_top = model1Imgbox.offset().top;

		
		for(i = 0;i < husen_is_num_array.length;i++){
		    //-----14と10はナゾ
			
		    if(hirituW_type_array[i] == 1){
				
		        dumm_left = ((model_left + Math.floor($(window).width()*hirituW_array[i])) - model1Ul.offset().left + 14) + "px";
		    }else{
			    dumm_left = ((model_left - Math.floor($(window).width()*hirituW_array[i])) - model1Ul.offset().left + 14) + "px";
		    }
		    if(hirituH_type_array[i] == 1){

		        dumm_top = ((model_top + Math.floor($(window).height()*hirituH_array[i])) - model1Ul.offset().top +10) +"px";
		    }else{
			    dumm_top = ((model_top - Math.floor($(window).height()*hirituH_array[i])) - model1Ul.offset().top +10) +"px";
		    }
	
		    husen_array[husen_is_num_array[i]].css('left',dumm_left);
		    husen_array[husen_is_num_array[i]].css('top',dumm_top);
		
		
		}

		
	}


    
	
	//------穴空きの枠（つまり穴空き）をクリック
	
	$(document).on('click','.ana',function(){
        //alert($(this).attr("class"));//---------ana ana1	
		//alert($(this).css("color"));//-----rgb(0, 0, 0)
		
		if($(this).css("color") == 'rgb(255, 255, 255)'){
		    $(this).css("color","#FF0000");//-----文字色を変えるだけなら、これがカンタン
			
			var class_nama = $(this).attr("class");
		    //ana_choice_num = class_nama.substring(7);//----1
			ana_choice_num_array.push(class_nama.substring(7));
	
		}else{
			var dumm_array = new Array();
			$(this).css("color","#FFFFFF");
			for(i = 0;i < ana_choice_num_array.length;i++){
			    if(ana_choice_num_array[i] != class_nama.substring(7)){
					dumm_array.push(i);
				}
			}
			ana_choice_num_array = new Array();
			for(i = 0;i < dumm_array.length;i++){
				ana_choice_num_array[i] = dumm_array[i];
			}	
		}
		
	
        return false;
    });
	
	
	
	
	//--------------------------------------------------------------------
	//----------------------------画像------------------------------------
	
	
	
	var img_data;
	var files = null;
	var files_list;
	
	
	model1Imgbox.on('dragenter', function(e) {
        e.preventDefault();
    });
    model1Imgbox.on('dragover', function(e){
        e.preventDefault();
    });
	
	
	//------画像の取り込み（ドラッグ&ドロップ）
	model1Imgbox.on('drop', function(e){
		
		gazouBox_h = model1Imgbox.height();
		var pre_width;
		var new_width;
		var pre_height;
		var new_height;
		
		if(files != null){//-----リストの初期化（画像の削除）
			files_list = "";
		}
		
        e.preventDefault();
        var files_list = e.originalEvent.dataTransfer.files;///----fileListが入る
		var files = files_list[0];
		//alert(files.type);//---------image/jpeg

        if (files.type.match('image.*')) {

            var reader = new FileReader();
			img_setumei.css("display","none");
		
            //エラー処理
            reader.onerror = function(e) {  
		        alert("ERROR");
            }
			
            //------------読み込み後の処理-----------
            reader.onload = function(e){
		
			    img_data = e.target.result;				
				img.attr('src', img_data);	
				
				var pre_w = img.get(0).naturalWidth;
				var pre_h = img.get(0).naturalHeight;
				
				var marginH = Math.floor(vh_dasi((model1Imgbox.height() - img.height())/2)) + "vh";
				img.css("marginTop",marginH);
					

				resiz_is();
								
				//img.width(100);//---設定
		        //alert(img.width());//---取得		
				
				
				//-----↓---------------------画像upload_test
				//test_upload(img_data);	
				
            };
            reader.readAsDataURL(files);
			
	       //alert(files.name);//------ファイル名	
			save_img_fileName_temp = files.name//-----------------save　保存用
        }
		
    });
	
		

	var husen_mouse_dn = false;
		
	$.each( husen_array, function(index, v){
		$(this).mousedown(
		    function () {
				husen_mouse_dn = true;
		        curr_husen = husen_array[index];
				curr_husenNum = index;
			}
		);
		$(this).mouseup(
		    function () {
				if(husen_mouse_dn){
		            undo_ire("husen",index);
					husen_mouse_dn = false;
				}
			}
		);
		$(this).mouseleave(
		    function () {
				if(husen_mouse_dn){
		            undo_ire("husen",index);
					husen_mouse_dn = false;
				}
			}
		);
	});
	
	
	
	//--------------------------------------
	
	
	//x位置をpxからvwに変換
	function vw_dasi(n){
		return(Math.floor(n/$(window).width()*100));
	}
	//y位置をpxからvwに変換
    function vh_dasi(n){
		return(Math.floor(n/$(window).height()*100));
	}
	
	///x位置をvwからpxに変換
	function vw_px_dasi(n){
		return(Math.floor($(window).width()*n/100));
	}
	//y位置をpxからvwに変換
    function vh_px_dasi(n){
		return(Math.floor($(window).height()*n/100));
	}

	
	

});