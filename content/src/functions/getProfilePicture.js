import $ from 'jquery';

export default async function getProfilePicture() {
	const html = await $.get('https://sms.schoolsoft.se/nti/jsp/student/right_student_pwdadmin.jsp');
	const src = html.split('<img')[2].split('"')[1];
	return src;
}