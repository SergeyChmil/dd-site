// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAGHlhhU9XaRNYm5dhbPAdEd8eBX6AVw3Y',
    authDomain: 'dd-site-visitcard.firebaseapp.com',
    databaseURL: 'https://dd-site-visitcard.firebaseio.com',
    projectId: 'dd-site-visitcard',
    storageBucket: 'dd-site-visitcard.appspot.com',
    messagingSenderId: '396744228563',
  },
  keys: {
    mainMenu: 'main_menu',
    galleriesMenu: 'galleries_menu',
    contactsData: 'contacts',
    pricesData: 'prices',
    blogPostsData: 'blog_posts',
    feedbackMessages: 'feedback_messages',
    newFeedbackMessagesList: 'new_feedback_messages_list',
    galleriesMetadata: 'galleries_data',
  },
  admin: {
    localPath: 'admin',
    email: 'sergeytchmil@gmail.com'
  },
  system_messages: {
    gallery_upload_success: 'Галерея успешно создана и загружена.',
    post_upload_success: 'Запись в блоге успешно создана и загружена.',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
