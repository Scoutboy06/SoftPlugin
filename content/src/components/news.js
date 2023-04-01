import $ from 'jquery';

export default $(`
<div class="span6right" id="betyg">
	<div class="h2_container" id="news_con">
		<div class="h2_box">
			<div class="h2_box_icon" style="margin-left:-10px; padding-top:2px;" >
				<img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/changelog.png" alt="" title="" >
			</div>
			<div class="h3" style="margin-top:6px; padding-left:6px;">Changelog</div>
		</div>
		<div id="news_con_content" class="h2_innerno_pad" >
			<div class="h3_bold" >Här ser du senaste ändringar på vårat plugin.</div>
			<table class="table table-striped news-private" style="width: 370px; word-break: break-word; border-right: rgb(204, 204, 204);" >
				<tbody>
					<tr class="news-private">
						<td class="news-private-td">
							<a class="toplist-item" href="">
								<div class="list-top"></div>
								<div class="heading_bold" >Introducerar dark-theme</div>
								<div>Använd SchoolSoft med dark-theme redan idag.</div>
							</a>
						</td>
						<td class="news-private-td-right" align="center"></td>
					</tr>
					<tr class="news-private">
						<td class="news-private-td">
							<a class="toplist-item" href="">
								<div class="list-top"></div>
								<div class="heading_bold">NTIP byggs fortfarande!</div>
								<div >Utvecklingen av NTIP påbörjades 2023-01-24!</div>
							</a>
						</td>
						<td class="news-private-td-right" align="center"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
`);