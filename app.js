const languageNames = {
  en: "English",
  es: "Español",
  zh: "中文",
  tl: "Tagalog",
  vi: "Tiếng Việt",
  ar: "العربية",
  fr: "Français",
  ko: "한국어",
  ru: "Русский",
  pt: "Português"
};

const translations = {
  en: {
    "meta.description": "Friendly, step-by-step help with phones, tablets, computers, and online safety.",
    "skip": "Skip to the help topics",
    "nav.label": "Main navigation",
    "nav.help": "Get help",
    "nav.didYouKnow": "Did you know?",
    "nav.social": "Social media",
    "nav.game": "Game",
    "nav.learn": "Learn",
    "nav.safety": "Stay safe",
    "text.large": "Larger text",
    "text.regular": "Regular text",
    "display.label": "Display options",
    "display.eyebrow": "Display options",
    "display.title": "Make the page easier to see.",
    "display.nightOn": "Night mode",
    "display.nightOff": "Day mode",
    "display.colorOn": "Color-blind colors",
    "display.colorOff": "Standard colors",
    "display.note": "These choices stay on this device until you turn them off.",
    "brand.slogan": "Don’t worry, you’re on the right track.",
    "hero.eyebrow": "Technology help at your pace",
    "hero.title": "Let’s make your technology feel easier.",
    "hero.intro": "Clear answers for phones, tablets, and computers. No confusing words. No judgment. No downloads needed.",
    "hero.cta": "What do you need help with?",
    "hero.bubbleTitle": "Take your time.",
    "hero.bubbleText": "You cannot break anything by reading these guides.",
    "trust.label": "What to expect",
    "trust.free": "Free to read",
    "trust.account": "Account optional",
    "trust.plain": "Plain language",
    "welcome.eyebrow": "Welcome to TUTUT",
    "welcome.title": "We’re here because technology should not feel intimidating.",
    "welcome.bodyOne": "Phones and computers change quickly, and anyone can feel left behind. TUTUT is a friendly place to ask questions, learn one step at a time, and find clear answers without judgment.",
    "welcome.bodyTwo": "We are not here to sell unnecessary downloads, rush you, or make you feel embarrassed. We simply want to help you feel safer, more confident, and more independent with your technology.",
    "welcome.promisesLabel": "What TUTUT promises",
    "welcome.askTitle": "Ask anything",
    "welcome.askBody": "There are no silly questions here.",
    "welcome.paceTitle": "Go at your pace",
    "welcome.paceBody": "Take one clear step at a time.",
    "welcome.safeTitle": "Feel safer",
    "welcome.safeBody": "Learn what to trust, close, or avoid.",
    "welcome.aiTitle": "Important: A familiar voice or face may be copied by AI.",
    "welcome.aiBody": "If a surprising call or video asks for money, secrecy, screen sharing, passwords, or a security code, stop and end the call. Contact the person or company yourself using a number you already trust.",
    "welcome.aiLink": "Read the AI and scam safety guide",
    "community.label": "Top community questions this week",
    "community.eyebrow": "Community questions",
    "community.title": "Top 3 questions answered this week",
    "community.body": "Real questions from TUTUT patrons, answered in plain language.",
    "community.rankOne": "#1 this week",
    "community.rankTwo": "#2 this week",
    "community.rankThree": "#3 this week",
    "community.patronOne": "Maria G.",
    "community.patronTwo": "Robert L.",
    "community.patronThree": "Linda P.",
    "community.q1.title": "Why does my phone get hot when I use maps?",
    "community.q1.answer": "Navigation uses GPS, screen brightness, internet, and sound at the same time. Close the map app after your trip and keep the phone out of direct sun.",
    "community.q2.title": "Should I tap a pop-up that says my phone has a virus?",
    "community.q2.answer": "No. Close the browser tab or app. Do not call the number, download the cleaner app, or give anyone a payment card.",
    "community.q3.title": "Why is my storage almost full?",
    "community.q3.answer": "Photos, videos, message attachments, and unused apps can fill a phone quickly. Start by deleting large videos and apps you no longer use.",
    "utility.label": "Language and sign in",
    "language.label": "Choose your language",
    "language.note": "TUTUT remembers this language on this device.",
    "signin.eyebrow": "Remember me",
    "signin.title": "Sign in next time faster.",
    "signin.body": "Use a simple TUTUT name and password. Your browser can offer to save the password in its own password manager.",
    "signin.name": "Your name",
    "signin.password": "Password",
    "signin.button": "Save for this device",
    "signin.saved": "Saved. Welcome back, {name}. Your browser may ask if you want to save this password.",
    "signin.needName": "Please enter your name first.",
    "help.eyebrow": "Start here",
    "help.title": "What can we help you with?",
    "help.body": "Choose a topic below or search using your own words.",
    "search.label": "Search for an answer",
    "search.placeholder": "Try “phone is slow” or “pop-ups”",
    "search.noResults": "We could not find that yet. Try a shorter phrase, such as “Wi-Fi” or “password.”",
    "device.label": "I use:",
    "device.all": "Any device",
    "device.iphone": "iPhone / iPad",
    "device.android": "Android",
    "device.computer": "Computer",
    "topics.slow.title": "My phone is slow",
    "topics.slow.sub": "Simple steps to speed it up",
    "topics.popups.title": "Pop-ups and strange warnings",
    "topics.popups.sub": "Know what is safe to close",
    "topics.wifi.title": "Wi-Fi is not working",
    "topics.wifi.sub": "Get connected again",
    "topics.messages.title": "Texts and photos",
    "topics.messages.sub": "Send, receive, and find them",
    "topics.passwords.title": "Passwords and signing in",
    "topics.passwords.sub": "Safe ways to get back in",
    "topics.scams.title": "Is this a scam?",
    "topics.scams.sub": "Stop and check before acting",
    "topics.damage.title": "My phone is damaged",
    "topics.damage.sub": "Repair, replace, or file a claim",
    "didYouKnow.eyebrow": "Hey, did you know?",
    "didYouKnow.title": "20 quick do’s and don’ts for a happier phone.",
    "didYouKnow.body": "Small habits can make your phone faster, safer, cooler, and less frustrating.",
    "didYouKnow.listLabel": "20 technology do and don't tips",
    "tips.do": "Do",
    "tips.dont": "Don’t",
    "tips.doGroup": "Things to do",
    "tips.dontGroup": "Things to avoid",
    "tips.orderNote": "Lower concern at the top. More serious safety items are at the bottom.",
    "severity.low": "Helpful habit",
    "severity.moderate": "Important",
    "severity.high": "High priority",
    "severity.urgent": "Urgent safety",
    "tips.1.title": "Close navigation apps after your trip.",
    "tips.1.body": "Maps and GPS keep using location in the background. Leaving them open can heat the phone and drain the battery faster.",
    "tips.2.title": "Don’t leave social media videos running.",
    "tips.2.body": "Video apps keep the screen, sound, internet, and processor busy. That can make the phone warm quickly.",
    "tips.3.title": "Restart your phone once a week.",
    "tips.3.body": "A restart clears stuck background tasks and gives the phone a fresh start.",
    "tips.4.title": "Don’t install “cleaner” apps from ads.",
    "tips.4.body": "Many cleaner apps show pop-ups, collect data, or make the phone feel worse. Use built-in Settings instead.",
    "tips.5.title": "Keep at least a little storage free.",
    "tips.5.body": "Phones slow down when storage is nearly full. Delete large videos or unused apps first.",
    "tips.6.title": "Don’t ignore heat warnings.",
    "tips.6.body": "If the phone says it needs to cool down, stop using it, remove the case, and keep it out of direct sun.",
    "tips.7.title": "Use official app stores.",
    "tips.7.body": "Get apps from the Apple App Store or Google Play. Random download buttons are a common scam doorway.",
    "tips.8.title": "Don’t tap scary pop-up warnings.",
    "tips.8.body": "Close the browser tab or app instead. Real companies do not ask you to call a number inside a pop-up.",
    "tips.9.title": "Update your phone when it asks.",
    "tips.9.body": "Updates fix security problems and often improve battery, speed, and reliability.",
    "tips.10.title": "Don’t share text-message codes.",
    "tips.10.body": "A six-digit code is like a temporary key. Banks, Apple, Google, and Microsoft will not call to ask for it.",
    "tips.11.title": "Turn down screen brightness indoors.",
    "tips.11.body": "A bright screen uses a lot of battery and adds heat. Auto-brightness can help.",
    "tips.12.title": "Don’t charge under a pillow or blanket.",
    "tips.12.body": "Charging creates heat. Keep the phone on a hard, open surface while it charges.",
    "tips.13.title": "Check app permissions.",
    "tips.13.body": "If an app does not need your location, camera, or microphone, turn that permission off in Settings.",
    "tips.14.title": "Don’t use public Wi-Fi for banking.",
    "tips.14.body": "Public Wi-Fi can be less private. Use your home Wi-Fi or cellular connection for banking and medical accounts.",
    "tips.15.title": "Use a lock screen.",
    "tips.15.body": "A passcode, fingerprint, or face unlock protects photos, messages, and accounts if the phone is lost.",
    "tips.16.title": "Don’t use the same password everywhere.",
    "tips.16.body": "If one account is stolen, different passwords help protect the others.",
    "tips.17.title": "Back up photos automatically.",
    "tips.17.body": "iCloud, Google Photos, or another trusted backup can protect memories if the phone breaks.",
    "tips.18.title": "Don’t answer pressure with speed.",
    "tips.18.body": "Scammers rush people. Pause, hang up, and call the official number yourself.",
    "tips.19.title": "Clean the charging port gently.",
    "tips.19.body": "Lint can stop charging. Never use liquid or metal. Ask a trusted repair shop if you are unsure.",
    "tips.20.title": "Don’t keep every notification on.",
    "tips.20.body": "Too many alerts are stressful and use battery. Turn off notifications for apps you do not need immediately.",
    "social.eyebrow": "Social media tutorials",
    "social.title": "Understand what Facebook is showing you.",
    "social.body": "Facebook makes suggestions and chooses posts for your Feed. You are still in control of who you follow, what you see, and what you trust.",
    "social.search.title": "Facebook search is not Google.",
    "social.search.body": "Facebook search looks for people, posts, photos, Pages, groups, and other things inside Facebook. Its results are personalized by your Facebook activity. A result is not automatically true just because Facebook shows it.",
    "social.search.step1": "Check where you are. The Facebook search bar searches Facebook.",
    "social.search.step2": "Use your web browser for the wider internet. Google, Bing, or another search engine searches websites beyond Facebook.",
    "social.search.step3": "Verify important information. For health, money, government, or emergencies, visit the organization’s official website yourself.",
    "social.suggested.title": "Seeing someone does not mean you follow them.",
    "social.suggested.body": "“Suggested for You” and “People You May Know” are recommendations chosen by Facebook. Facebook can recommend people, Pages, groups, and posts you have never followed.",
    "social.suggested.step1": "Look for words such as “Suggested for You.” That means Facebook placed it there as a recommendation.",
    "social.suggested.step2": "You choose the connection. Only tap Follow, Add Friend, or Join when you recognize and trust the person or group.",
    "social.suggested.step3": "A suggestion is not a request you must accept. You can remove it, hide it, or keep scrolling.",
    "social.dots.title": "Use the three dots to improve your Feed.",
    "social.dots.body": "The three-dot button near the top-right corner of a post opens choices for that post. The exact words can differ by device or Facebook version.",
    "social.dots.step1": "Tap the three dots. Look near the top-right of the post.",
    "social.dots.step2": "Choose “Not interested,” “Show less,” or “Hide post.” This tells Facebook you want fewer posts like it.",
    "social.dots.step3": "Use Report for harmful content. Report scams, impersonation, threats, or posts that may break Facebook’s rules.",
    "social.ai.title": "AI videos can look and sound real.",
    "social.ai.body": "Some AI-made or edited videos have visible mistakes, but the best fakes may not. Do not decide based on strange hands or lips alone. Verify the source before believing or sharing the video.",
    "social.ai.step1": "Check the account. Is it the real person or organization? Look at its name, history, and official website.",
    "social.ai.step2": "Look and listen carefully. Warning signs can include mismatched lips and audio, unnatural motion, warped text, changing backgrounds, or impossible details.",
    "social.ai.step3": "Notice emotional pressure. Pause when a video demands urgent action, money, secrecy, or immediate sharing.",
    "social.ai.step4": "Confirm with more than one reliable source. AI labels can help, but no label does not prove a video is real.",
    "social.ai.rule": "Best rule: Verify the source, not just the pixels.",
    "social.sources": "Current guidance:",
    "scamSafety.eyebrow": "AI and social scam safety",
    "scamSafety.title": "A familiar face or voice can still be fake.",
    "scamSafety.body": "Scammers can copy voices, use convincing video, take over real social accounts, and create fake profiles. You do not have to decide during the call or message.",
    "scamSafety.stopTitle": "Stop, hang up, and verify another way.",
    "scamSafety.stopBody": "Call the person, bank, or company using a number you already know or find on its official website. Never use the number or link supplied by the unexpected caller.",
    "scamSafety.voice.title": "AI voice calls and family emergencies",
    "scamSafety.voice.body": "A scammer may clone a relative’s voice from a short online recording. The voice may cry, whisper, or claim there was an accident, arrest, kidnapping, or medical emergency.",
    "scamSafety.voice.sign1": "Urgency, secrecy, and “you are the only person who can help” are major warning signs.",
    "scamSafety.voice.sign2": "Hang up and call your relative using the number already saved in your contacts.",
    "scamSafety.voice.sign3": "Ask a private family question or use a family safe word. Do not send gift cards, cryptocurrency, cash, or a security code.",
    "scamSafety.video.title": "Fake FaceTime and video calls",
    "scamSafety.video.body": "A video call can use a stolen account, prerecorded video, face filters, or AI. A bank, Apple, the police, or the government should not unexpectedly FaceTime you for money or account access.",
    "scamSafety.video.sign1": "Do not share your screen, bank app, password, passcode, or text-message security code.",
    "scamSafety.video.sign2": "Do not allow remote screen control for someone who contacted you unexpectedly.",
    "scamSafety.video.sign3": "End the call and contact the organization through its official app, card, statement, or website.",
    "scamSafety.instagram.title": "Instagram scams",
    "scamSafety.instagram.body": "Watch for fake account-security warnings, paid verification offers, celebrity impersonators, romance messages, cash-flipping investments, and shops that move payment outside Instagram.",
    "scamSafety.instagram.sign1": "Instagram says it will not send account-security warnings through a direct message.",
    "scamSafety.instagram.sign2": "Never send a password, login link, security code, deposit, or “release fee.”",
    "scamSafety.instagram.sign3": "Open the profile’s three-dot menu to inspect or report the account. Check official Instagram emails inside Settings.",
    "scamSafety.snapchat.title": "Snapchat scams",
    "scamSafety.snapchat.body": "Common traps include fake Snapchat support, phishing links, a hacked friend asking for money, fake giveaways, and threats involving private pictures.",
    "scamSafety.snapchat.sign1": "Snapchat staff will not contact you through a Snap or Chat to provide support.",
    "scamSafety.snapchat.sign2": "Back out if Snapchat warns that a link may be dangerous. Do not enter your login information.",
    "scamSafety.snapchat.sign3": "Press and hold suspicious content or messages, then choose Report. Do not pay someone who threatens or blackmails you.",
    "scamSafety.tiktok.title": "TikTok scams",
    "scamSafety.tiktok.body": "Beware of messages offering free followers, likes, Coins, prizes, brand jobs, investment returns, or account verification through another website.",
    "scamSafety.tiktok.sign1": "TikTok says legitimate messages will not ask for your password or sensitive personal information.",
    "scamSafety.tiktok.sign2": "Do not open suspicious messages, videos, or links asking you to enter TikTok login details.",
    "scamSafety.tiktok.sign3": "Delete or report message requests from strangers who quickly ask for money, private contact, or personal details.",
    "scamSafety.all.title": "Facebook, Messenger, WhatsApp, dating apps, and every social platform",
    "scamSafety.all.body": "The same scams travel between apps: fake Marketplace payments, “new phone number” family messages, romance scams, investment groups, fake support, prizes, and requests to move the conversation elsewhere.",
    "scamSafety.all.sign1": "A payment screenshot is not proof. Check your bank or payment app yourself.",
    "scamSafety.all.sign2": "Someone who builds trust and then asks for travel money, medical money, investments, gift cards, or cryptocurrency may be running a romance scam.",
    "scamSafety.all.sign3": "Block and report the account. Tell someone you trust before sending money or private information.",
    "scamSafety.jokeLabel": "A lighthearted scam reminder",
    "scamSafety.joke": "If an ad says “Hot singles in your area are waiting,” the only thing definitely waiting is the payment page. Cupid does not need your credit card number.",
    "scamSafety.sources": "Safety sources:",
    "quiz.eyebrow": "TUTUT Track Challenge",
    "quiz.title": "Practice what you learned and earn train badges.",
    "quiz.body": "Choose the safest answer. Every correct stop earns a big “CHOOO-CHOOO,” and your achievements stay saved on this device.",
    "quiz.questionLabel": "Question",
    "quiz.scoreLabel": "Score",
    "quiz.streakLabel": "Streak",
    "quiz.soundOn": "Train sounds: On",
    "quiz.soundOff": "Train sounds: Off",
    "quiz.next": "Next question",
    "quiz.finish": "See my results",
    "quiz.finalStop": "Final stop",
    "quiz.correct": "CHOOO-CHOOO! Correct — you’re on the right track.",
    "quiz.incorrect": "Brake check! Not quite — the safest answer is highlighted.",
    "quiz.complete": "Challenge complete! You answered {score} out of {total} correctly.",
    "quiz.resultsLabel": "TUTUT Track Challenge results",
    "quiz.resultsTitle": "Your complete answer review",
    "quiz.resultsSummary": "You answered {score} out of {total} correctly. Review every question below.",
    "quiz.resultsSelectedCorrect": "Correct",
    "quiz.resultsCorrect": "Correct answer",
    "quiz.resultsIncorrect": "Incorrect",
    "quiz.resultsClose": "Close results",
    "quiz.achievements": "Your achievements",
    "quiz.achievementsBody": "Badges are saved in this browser.",
    "quiz.noAchievements": "No badges yet. Your first correct answer unlocks one.",
    "quiz.restart": "Restart challenge",
    "quiz.badgeUnlocked": "Achievement unlocked: {name}",
    "quiz.badge.first.name": "First Stop",
    "quiz.badge.first.body": "Answered your first question correctly.",
    "quiz.badge.streak.name": "Express Rider",
    "quiz.badge.streak.body": "Answered three questions correctly in a row.",
    "quiz.badge.five.name": "Safety Conductor",
    "quiz.badge.five.body": "Answered five questions correctly.",
    "quiz.badge.perfect.name": "TUTUT Engineer",
    "quiz.badge.perfect.body": "Completed the challenge with a perfect score.",
    "learn.eyebrow": "Learn without pressure",
    "learn.title": "Small lessons. Useful skills.",
    "learn.one.title": "Phone basics",
    "learn.one.body": "Buttons, volume, charging, and getting home.",
    "learn.two.title": "Taking and sharing photos",
    "learn.two.body": "Keep the moments you care about close.",
    "learn.three.title": "Safer everyday browsing",
    "learn.three.body": "Recognize ads, real links, and warning signs.",
    "safety.eyebrow": "A TUTUT safety promise",
    "safety.title": "We will never ask for your password.",
    "safety.body": "Never share a password, bank number, or text-message security code with someone who contacts you unexpectedly. A real helper will let you type private information yourself.",
    "footer": "Friendly technology help for everyone.",
    "dialog.label": "TUTUT step-by-step help",
    "dialog.close": "Close this guide",
    "guide.good": "Good to know:",
    "helpbot.open": "Open TUTUT help bot",
    "helpbot.label": "TUTUT help bot",
    "helpbot.close": "Close help bot",
    "helpbot.title": "How can TUTUT help?",
    "helpbot.note": "Ask about phone trouble, pop-ups, scams, storage, Wi-Fi, repairs, or passwords. TUTUT checks its saved answer well first, with no API needed.",
    "helpbot.greeting": "Hi, I’m TUTUT. Tell me what is happening, and I’ll point you to a safe next step.",
    "helpbot.inputLabel": "Type your question",
    "helpbot.placeholder": "Example: my phone says it has a virus",
    "helpbot.send": "Ask",
    "helpbot.empty": "Type a few words about what is happening, then I can help you choose the safest next step.",
    "helpbot.internet": "For live internet answers, TUTUT will need a secure backend connected to a search-capable assistant. Right now I can help with common phone problems already built into this site.",
    "helpbot.default": "I can help with common phone questions. Try asking about a slow phone, pop-ups, Wi-Fi, passwords, scams, overheating, storage, or damage.",
    "helpbot.slow": "A slow phone is often caused by too many apps open, almost-full storage, or needing a restart. Start with the “My phone is slow” guide.",
    "helpbot.popups": "Do not tap scary pop-ups, call their phone number, or download a cleaner app. Close the browser tab or app, then use the “Pop-ups and strange warnings” guide.",
    "helpbot.wifi": "For Wi-Fi trouble, check that Wi-Fi is on, choose your home network, then restart the internet box if every device is offline.",
    "helpbot.passwords": "Use the official “Forgot password?” button and never share a text-message code with someone who contacted you first.",
    "helpbot.scams": "Pause if someone pressures you, asks for gift cards, wants remote access, or asks for a security code. Use an official phone number you find yourself.",
    "helpbot.heat": "If your phone feels hot, close navigation and video apps, remove the case, stop charging if needed, and keep it out of sun until it cools.",
    "helpbot.storage": "When storage is full, start with large videos, message attachments, and unused apps. Keep a little free space so the phone can breathe.",
    "helpbot.damage": "If the phone is cracked, wet, or not charging, back it up if possible, check your carrier protection plan, and compare repair shops by ratings, recent reviews, warranty, and total price.",
    "helpbot.saveSuccess": "This helped",
    "helpbot.savedSuccess": "Saved as a helpful answer for this device.",
    "helpbot.notHelpful": "This didn’t help",
    "helpbot.addAnswer": "Add a better answer",
    "helpbot.betterAnswerLabel": "What answer would have helped?",
    "helpbot.betterAnswerPlaceholder": "Type the better answer here so TUTUT can remember it.",
    "helpbot.saveBetterAnswer": "Save better answer",
    "helpbot.savedBetterAnswer": "Thank you. TUTUT saved that better answer in the answer well.",
    "helpbot.needBetterAnswer": "Please type the better answer first.",
    "helpbot.learned": "I found this in the TUTUT answer well:",
    "helpbot.related": "This touches a few things at once. Here is the safest order:",
    "feedback.up": "Thumbs up",
    "feedback.down": "Thumbs down",
    "feedback.commentLabel": "Comment for improving this method",
    "feedback.commentPlaceholder": "What should TUTUT update, clarify, or do differently?",
    "feedback.saveComment": "Save comment",
    "feedback.savedVote": "Thanks. Your vote was saved.",
    "feedback.savedComment": "Thanks. Your comment was saved for future updates.",
    "feedback.needComment": "Please type a comment first.",
    guides: {
      "slow-phone": {
        title: "Why is my phone slow?",
        intro: "Phones usually slow down because too many things are open, storage is nearly full, or the phone has not restarted recently.",
        steps: [
          "<strong>Restart the phone.</strong> Turn it completely off, wait 30 seconds, and turn it back on.",
          "<strong>Close apps you are not using.</strong> Do not install a “cleaner” app. These often show ads and are not needed.",
          "<strong>Check your storage.</strong> Open Settings and search for “Storage.” If it is almost full, remove videos or apps you no longer use.",
          "<strong>Install the phone’s update.</strong> In Settings, search for “Software Update.” Keep the phone plugged in while it updates."
        ],
        note: "Still slow? An older phone may need a new battery. Ask the phone maker or a trusted repair shop to check it before buying a new phone."
      },
      popups: {
        title: "Pop-ups and strange warnings",
        intro: "A scary message does not always mean your device has a virus. Many pop-ups are advertisements trying to make you click.",
        warning: "Do not call a phone number shown in a pop-up. Do not download a cleaner or security app from the message.",
        steps: [
          "<strong>Do not tap the warning.</strong> Even buttons that say “Close” may be part of the advertisement.",
          "<strong>Close the browser tab or app.</strong> Swipe the app away, then open it again.",
          "<strong>Clear website history if it returns.</strong> Open your browser settings and look for “Clear History” or “Clear Browsing Data.”",
          "<strong>Use the official app store only.</strong> On iPhone use the App Store. On Android use Google Play."
        ],
        note: "A real Apple, Google, Microsoft, or bank employee will not ask you to pay with gift cards or share a security code."
      },
      wifi: {
        title: "Wi-Fi is not working",
        intro: "First, check whether the problem is your phone or the internet connection in the whole home.",
        steps: [
          "<strong>Look for the Wi-Fi symbol.</strong> Open Settings, choose Wi-Fi, and make sure it is turned on.",
          "<strong>Choose your home network.</strong> Tap its name and carefully enter the Wi-Fi password.",
          "<strong>Try another device.</strong> If nothing connects, the home internet box may be the problem.",
          "<strong>Restart the internet box.</strong> Unplug it for 30 seconds, plug it back in, and wait up to five minutes."
        ],
        note: "Do not press the tiny “Reset” hole on the internet box. That can erase its settings."
      },
      messages: {
        title: "Texts and photos",
        intro: "Your Messages app lets you send words and pictures to people whose phone numbers you know.",
        steps: [
          "<strong>Open Messages.</strong> Look for a green speech bubble on iPhone or a blue speech bubble on many Android phones.",
          "<strong>Start a message.</strong> Tap the pencil or “Start chat” button, then choose a person.",
          "<strong>Write your message.</strong> Tap the long empty box near the bottom and use the keyboard.",
          "<strong>Add a photo.</strong> Tap the photo or camera symbol, choose a picture, then tap the send arrow."
        ],
        note: "Check the person’s name before sending a private photo. A sent text may not be possible to take back."
      },
      passwords: {
        title: "Passwords and signing in",
        intro: "A password protects your account. Use a different password for important accounts such as email and banking.",
        warning: "Never read a password or a text-message security code aloud to someone who called you.",
        steps: [
          "<strong>Use “Forgot password?”</strong> This is safer than guessing many times and locking the account.",
          "<strong>Check the website or app name.</strong> Reset a password only inside the official app or website.",
          "<strong>Create a long password.</strong> Use several unrelated words that are memorable to you but hard for others to guess.",
          "<strong>Save it safely.</strong> Use the password manager built into your iPhone, Android phone, or web browser."
        ],
        note: "TUTUT will never ask you to type your password into this website."
      },
      scams: {
        title: "Could this be a scam?",
        intro: "Scammers create urgency. They may pretend to be a relative, your bank, the government, or a well-known company.",
        warning: "Stop if someone asks for gift cards, cryptocurrency, remote access to your screen, or a security code.",
        steps: [
          "<strong>Pause.</strong> You do not need to act immediately, even if the message says you do.",
          "<strong>Do not use their link or phone number.</strong> Find the organization’s official number on a statement, card, or official website.",
          "<strong>Contact the person another way.</strong> If a relative asks for money, call the number you already have for them.",
          "<strong>Ask someone you trust.</strong> A second person can often spot pressure or unusual requests."
        ],
        note: "If you already paid or shared banking information, call your bank using the number on the back of your card immediately."
      },
      "damaged-phone": {
        title: "What if my phone is damaged?",
        intro: "If your phone is cracked, wet, not charging, or badly damaged, first protect your information and then compare repair, insurance, and replacement options.",
        warning: "If the phone is hot, swollen, smoking, or smells like chemicals, stop using it and keep it away from anything flammable. Do not charge it.",
        steps: [
          "<strong>Back up your phone if it still turns on.</strong> Use iCloud, Google backup, or your computer so photos, contacts, and messages are safer.",
          "<strong>Check your warranty or protection plan.</strong> Look in your phone carrier account, AppleCare, Samsung Care, or any insurance plan you pay for monthly.",
          "<strong>File a claim with your phone carrier if you have insurance.</strong> Call your carrier or use the carrier’s official website or app. Ask about the deductible, replacement cost, and how long it will take.",
          "<strong>Compare repair shops before going.</strong> Search for nearby phone repair shops and compare star ratings, number of reviews, recent comments, warranty on repairs, and price estimates.",
          "<strong>Ask what parts they use.</strong> For screens and batteries, ask whether parts are original, certified, or third-party, and whether the repair affects water resistance.",
          "<strong>Decide repair or replace.</strong> If the repair costs close to the price of a newer phone, replacement may make more sense. Ask for the total price before agreeing."
        ],
        note: "Before handing over a phone, remove private information when possible, sign out of payment apps, and never give a repair shop your account password unless you fully trust the shop and understand why it is needed."
      }
    }
  },
  es: {
    "nav.help": "Ayuda", "nav.learn": "Aprender", "nav.safety": "Seguridad", "text.large": "Texto más grande", "text.regular": "Texto normal",
    "hero.eyebrow": "Ayuda tecnológica a su ritmo", "hero.title": "Hagamos que la tecnología se sienta más fácil.", "hero.intro": "Respuestas claras para teléfonos, tabletas y computadoras. Sin palabras confusas. Sin juzgar. Sin descargas.", "hero.cta": "¿Con qué necesita ayuda?", "hero.bubbleTitle": "Tómese su tiempo.", "hero.bubbleText": "No puede romper nada por leer estas guías.",
    "trust.free": "Gratis para leer", "trust.account": "Cuenta opcional", "trust.plain": "Lenguaje sencillo", "language.label": "Elija su idioma", "language.note": "TUTUT recuerda este idioma en este dispositivo.",
    "signin.eyebrow": "Recordarme", "signin.title": "Entre más rápido la próxima vez.", "signin.body": "Use un nombre y una contraseña de TUTUT. Su navegador puede ofrecer guardar la contraseña en su propio administrador de contraseñas.", "signin.name": "Su nombre", "signin.password": "Contraseña", "signin.button": "Guardar en este dispositivo", "signin.saved": "Guardado. Bienvenido de nuevo, {name}. Su navegador puede preguntar si quiere guardar esta contraseña.", "signin.needName": "Escriba su nombre primero.",
    "help.eyebrow": "Empiece aquí", "help.title": "¿Con qué podemos ayudar?", "help.body": "Elija un tema o busque con sus propias palabras.", "search.label": "Buscar una respuesta", "search.placeholder": "Pruebe “teléfono lento” o “ventanas emergentes”", "search.noResults": "Todavía no encontramos eso. Pruebe una frase más corta, como “Wi-Fi” o “contraseña”.",
    "device.label": "Uso:", "device.all": "Cualquier dispositivo", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "Computadora",
    "topics.slow.title": "Mi teléfono está lento", "topics.slow.sub": "Pasos sencillos para acelerarlo", "topics.popups.title": "Ventanas emergentes y avisos raros", "topics.popups.sub": "Sepa qué es seguro cerrar", "topics.wifi.title": "El Wi-Fi no funciona", "topics.wifi.sub": "Conéctese de nuevo", "topics.messages.title": "Textos y fotos", "topics.messages.sub": "Envíe, reciba y encuéntrelos", "topics.passwords.title": "Contraseñas e inicio de sesión", "topics.passwords.sub": "Formas seguras de volver a entrar", "topics.scams.title": "¿Es una estafa?", "topics.scams.sub": "Deténgase y revise antes de actuar",
    "learn.eyebrow": "Aprenda sin presión", "learn.title": "Lecciones pequeñas. Habilidades útiles.", "learn.one.title": "Lo básico del teléfono", "learn.one.body": "Botones, volumen, carga y volver al inicio.", "learn.two.title": "Tomar y compartir fotos", "learn.two.body": "Mantenga cerca los momentos importantes.", "learn.three.title": "Navegar con más seguridad", "learn.three.body": "Reconozca anuncios, enlaces reales y señales de alerta.",
    "safety.eyebrow": "Promesa de seguridad de TUTUT", "safety.title": "Nunca le pediremos su contraseña.", "safety.body": "Nunca comparta una contraseña, número de banco o código de seguridad por mensaje con alguien que lo contacte de sorpresa. Un ayudante real le dejará escribir la información privada usted mismo.", "footer": "Ayuda tecnológica amable para todos.", "dialog.close": "Cerrar esta guía", "guide.good": "Bueno saber:",
    guides: {
      "slow-phone": { title: "¿Por qué mi teléfono está lento?", intro: "Los teléfonos suelen ponerse lentos porque hay demasiadas cosas abiertas, el almacenamiento está casi lleno o no se ha reiniciado recientemente.", steps: ["<strong>Reinicie el teléfono.</strong> Apáguelo por completo, espere 30 segundos y enciéndalo.", "<strong>Cierre apps que no usa.</strong> No instale una app de “limpieza”. Muchas muestran anuncios y no son necesarias.", "<strong>Revise el almacenamiento.</strong> Abra Configuración y busque “Almacenamiento”. Si está casi lleno, borre videos o apps que ya no usa.", "<strong>Instale la actualización del teléfono.</strong> En Configuración, busque “Actualización de software”. Mantenga el teléfono conectado."], note: "¿Sigue lento? Un teléfono viejo quizá necesite una batería nueva. Pida una revisión antes de comprar otro teléfono." },
      popups: { title: "Ventanas emergentes y avisos raros", intro: "Un mensaje alarmante no siempre significa que su dispositivo tiene virus. Muchas ventanas emergentes son anuncios.", warning: "No llame al número que aparece. No descargue una app de limpieza o seguridad desde ese mensaje.", steps: ["<strong>No toque el aviso.</strong> Incluso botones que dicen “Cerrar” pueden ser parte del anuncio.", "<strong>Cierre la pestaña o la app.</strong> Deslice la app para cerrarla y ábrala otra vez.", "<strong>Borre el historial si vuelve.</strong> En el navegador busque “Borrar historial” o “Borrar datos”.", "<strong>Use solo la tienda oficial.</strong> En iPhone use App Store. En Android use Google Play."], note: "Una empresa real no le pedirá pagar con tarjetas de regalo ni compartir un código de seguridad." }
    }
  },
  zh: {
    "nav.help": "获得帮助", "nav.learn": "学习", "nav.safety": "安全", "text.large": "更大文字", "text.regular": "普通文字",
    "hero.eyebrow": "按照您的速度学习科技", "hero.title": "让科技变得更容易。", "hero.intro": "为手机、平板和电脑提供清楚答案。不用难懂词。不批评。不需要下载。", "hero.cta": "您需要什么帮助？", "hero.bubbleTitle": "慢慢来。", "hero.bubbleText": "阅读这些指南不会弄坏任何东西。",
    "trust.free": "免费阅读", "trust.account": "账号可选", "trust.plain": "简单语言", "language.label": "选择语言", "language.note": "TUTUT 会在此设备记住您的语言。",
    "signin.eyebrow": "记住我", "signin.title": "下次更快登录。", "signin.body": "使用一个简单的 TUTUT 名字和密码。浏览器可以把密码保存在自己的密码管理器中。", "signin.name": "您的名字", "signin.password": "密码", "signin.button": "保存在此设备", "signin.saved": "已保存。欢迎回来，{name}。浏览器可能会询问是否保存此密码。", "signin.needName": "请先输入您的名字。",
    "help.eyebrow": "从这里开始", "help.title": "我们可以帮您什么？", "help.body": "选择一个主题，或用自己的话搜索。", "search.label": "搜索答案", "search.placeholder": "试试“手机慢”或“弹窗”", "search.noResults": "还没有找到。请试试更短的词，例如“Wi-Fi”或“密码”。",
    "device.label": "我使用：", "device.all": "任何设备", "device.iphone": "iPhone / iPad", "device.android": "安卓", "device.computer": "电脑",
    "topics.slow.title": "我的手机很慢", "topics.slow.sub": "简单步骤让它更快", "topics.popups.title": "弹窗和奇怪警告", "topics.popups.sub": "知道什么可以安全关闭", "topics.wifi.title": "Wi-Fi 不能用", "topics.wifi.sub": "重新连接", "topics.messages.title": "短信和照片", "topics.messages.sub": "发送、接收和查找", "topics.passwords.title": "密码和登录", "topics.passwords.sub": "安全地重新进入", "topics.scams.title": "这是骗局吗？", "topics.scams.sub": "行动前先停下来检查",
    "learn.eyebrow": "没有压力地学习", "learn.title": "小课程。实用技能。", "learn.one.title": "手机基础", "learn.one.body": "按钮、音量、充电和返回主页。", "learn.two.title": "拍照和分享照片", "learn.two.body": "保存重要时刻。", "learn.three.title": "更安全地浏览", "learn.three.body": "识别广告、真实链接和警告信号。",
    "safety.eyebrow": "TUTUT 安全承诺", "safety.title": "我们永远不会要您的密码。", "safety.body": "不要把密码、银行号码或短信验证码告诉突然联系您的人。真正的帮手会让您自己输入私人信息。", "footer": "给每个人的友好科技帮助。", "dialog.close": "关闭指南", "guide.good": "请记住："
  },
  tl: {
    "nav.help": "Tulong", "nav.learn": "Matuto", "nav.safety": "Kaligtasan", "text.large": "Mas malaking titik", "text.regular": "Karaniwang titik",
    "hero.eyebrow": "Tulong sa teknolohiya sa bilis mo", "hero.title": "Gawing mas madali ang teknolohiya.", "hero.intro": "Malinaw na sagot para sa telepono, tablet, at computer. Walang magulong salita. Walang paghuhusga. Walang kailangang i-download.", "hero.cta": "Ano ang kailangan mong tulong?", "hero.bubbleTitle": "Dahan-dahan lang.", "hero.bubbleText": "Wala kang masisira sa pagbabasa ng mga gabay.",
    "trust.free": "Libreng basahin", "trust.account": "Opsyonal ang account", "trust.plain": "Simpleng salita", "language.label": "Piliin ang wika", "language.note": "Tatandaan ng TUTUT ang wikang ito sa device na ito.",
    "signin.eyebrow": "Tandaan ako", "signin.title": "Mas mabilis pumasok sa susunod.", "signin.body": "Gumamit ng simpleng pangalan at password sa TUTUT. Maaaring ialok ng browser na i-save ang password sa sarili nitong password manager.", "signin.name": "Pangalan mo", "signin.password": "Password", "signin.button": "I-save sa device na ito", "signin.saved": "Na-save. Maligayang pagbabalik, {name}. Maaaring itanong ng browser kung gusto mong i-save ang password.", "signin.needName": "Ilagay muna ang iyong pangalan.",
    "help.eyebrow": "Magsimula dito", "help.title": "Ano ang maitutulong namin?", "help.body": "Pumili ng paksa o maghanap gamit ang sarili mong salita.", "search.label": "Maghanap ng sagot", "search.placeholder": "Subukan ang “mabagal ang phone” o “pop-up”", "search.noResults": "Hindi pa namin nakita iyon. Subukan ang mas maikling salita gaya ng “Wi-Fi” o “password”.",
    "device.label": "Ginagamit ko:", "device.all": "Kahit anong device", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "Computer",
    "topics.slow.title": "Mabagal ang phone ko", "topics.slow.sub": "Madaling hakbang para bumilis", "topics.popups.title": "Pop-up at kakaibang babala", "topics.popups.sub": "Alamin kung ano ang ligtas isara", "topics.wifi.title": "Hindi gumagana ang Wi-Fi", "topics.wifi.sub": "Makakonekta muli", "topics.messages.title": "Text at larawan", "topics.messages.sub": "Magpadala, tumanggap, at hanapin", "topics.passwords.title": "Password at pag-sign in", "topics.passwords.sub": "Ligtas na paraan para makapasok muli", "topics.scams.title": "Scam ba ito?", "topics.scams.sub": "Huminto at suriin bago kumilos",
    "learn.eyebrow": "Matuto nang walang pressure", "learn.title": "Maliliit na aralin. Kapaki-pakinabang na kakayahan.", "learn.one.title": "Mga basic ng phone", "learn.one.body": "Buttons, volume, charging, at pagbalik sa home.", "learn.two.title": "Pagkuha at pagbabahagi ng larawan", "learn.two.body": "Panatilihing malapit ang mahalagang sandali.", "learn.three.title": "Mas ligtas na pag-browse", "learn.three.body": "Kilalanin ang ads, totoong links, at babala.",
    "safety.eyebrow": "Pangako ng TUTUT sa kaligtasan", "safety.title": "Hindi namin hihingin ang iyong password.", "safety.body": "Huwag ibahagi ang password, bank number, o text security code sa taong bigla kang kinontak. Ang tunay na tumutulong ay hahayaan kang ikaw ang mag-type ng pribadong impormasyon.", "footer": "Magiliw na tulong sa teknolohiya para sa lahat.", "dialog.close": "Isara ang gabay", "guide.good": "Tandaan:"
  },
  vi: {
    "nav.help": "Trợ giúp", "nav.learn": "Học", "nav.safety": "An toàn", "text.large": "Chữ lớn hơn", "text.regular": "Chữ thường",
    "hero.eyebrow": "Trợ giúp công nghệ theo tốc độ của quý vị", "hero.title": "Hãy làm công nghệ dễ dùng hơn.", "hero.intro": "Câu trả lời rõ ràng cho điện thoại, máy tính bảng và máy tính. Không dùng từ khó. Không phán xét. Không cần tải xuống.", "hero.cta": "Quý vị cần giúp gì?", "hero.bubbleTitle": "Cứ từ từ.", "hero.bubbleText": "Đọc các hướng dẫn này sẽ không làm hỏng gì cả.",
    "trust.free": "Miễn phí đọc", "trust.account": "Tài khoản tùy chọn", "trust.plain": "Ngôn ngữ đơn giản", "language.label": "Chọn ngôn ngữ", "language.note": "TUTUT nhớ ngôn ngữ này trên thiết bị này.",
    "signin.eyebrow": "Nhớ tôi", "signin.title": "Lần sau đăng nhập nhanh hơn.", "signin.body": "Dùng tên và mật khẩu TUTUT đơn giản. Trình duyệt có thể đề nghị lưu mật khẩu trong trình quản lý mật khẩu của nó.", "signin.name": "Tên của quý vị", "signin.password": "Mật khẩu", "signin.button": "Lưu trên thiết bị này", "signin.saved": "Đã lưu. Chào mừng trở lại, {name}. Trình duyệt có thể hỏi quý vị có muốn lưu mật khẩu này không.", "signin.needName": "Vui lòng nhập tên trước.",
    "help.eyebrow": "Bắt đầu ở đây", "help.title": "Chúng tôi có thể giúp gì?", "help.body": "Chọn một chủ đề hoặc tìm bằng lời của quý vị.", "search.label": "Tìm câu trả lời", "search.placeholder": "Thử “điện thoại chậm” hoặc “cửa sổ bật lên”", "search.noResults": "Chưa tìm thấy. Hãy thử cụm ngắn hơn như “Wi-Fi” hoặc “mật khẩu”.",
    "device.label": "Tôi dùng:", "device.all": "Bất kỳ thiết bị nào", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "Máy tính",
    "topics.slow.title": "Điện thoại của tôi chậm", "topics.slow.sub": "Các bước đơn giản để nhanh hơn", "topics.popups.title": "Cửa sổ bật lên và cảnh báo lạ", "topics.popups.sub": "Biết điều gì an toàn để đóng", "topics.wifi.title": "Wi-Fi không hoạt động", "topics.wifi.sub": "Kết nối lại", "topics.messages.title": "Tin nhắn và hình ảnh", "topics.messages.sub": "Gửi, nhận và tìm chúng", "topics.passwords.title": "Mật khẩu và đăng nhập", "topics.passwords.sub": "Cách an toàn để vào lại", "topics.scams.title": "Đây có phải lừa đảo không?", "topics.scams.sub": "Dừng lại và kiểm tra trước khi làm",
    "learn.eyebrow": "Học không áp lực", "learn.title": "Bài học nhỏ. Kỹ năng hữu ích.", "learn.one.title": "Căn bản về điện thoại", "learn.one.body": "Nút, âm lượng, sạc và trở về màn hình chính.", "learn.two.title": "Chụp và chia sẻ hình", "learn.two.body": "Giữ những khoảnh khắc quan trọng gần bên.", "learn.three.title": "Duyệt web an toàn hơn", "learn.three.body": "Nhận biết quảng cáo, liên kết thật và dấu hiệu cảnh báo.",
    "safety.eyebrow": "Lời hứa an toàn của TUTUT", "safety.title": "Chúng tôi sẽ không bao giờ hỏi mật khẩu của quý vị.", "safety.body": "Đừng chia sẻ mật khẩu, số ngân hàng hoặc mã bảo mật qua tin nhắn với người bất ngờ liên lạc. Người trợ giúp thật sẽ để quý vị tự nhập thông tin riêng tư.", "footer": "Trợ giúp công nghệ thân thiện cho mọi người.", "dialog.close": "Đóng hướng dẫn", "guide.good": "Điều nên biết:"
  },
  ar: {
    "nav.help": "المساعدة", "nav.learn": "تعلّم", "nav.safety": "السلامة", "text.large": "نص أكبر", "text.regular": "نص عادي",
    "hero.eyebrow": "مساعدة تقنية حسب سرعتك", "hero.title": "لنجعل التقنية أسهل.", "hero.intro": "إجابات واضحة للهواتف والأجهزة اللوحية والكمبيوتر. بدون كلمات معقدة. بدون حكم. بدون تنزيلات.", "hero.cta": "بماذا تحتاج إلى مساعدة؟", "hero.bubbleTitle": "خذ وقتك.", "hero.bubbleText": "لن تكسر شيئًا بقراءة هذه الأدلة.",
    "trust.free": "مجاني للقراءة", "trust.account": "الحساب اختياري", "trust.plain": "لغة بسيطة", "language.label": "اختر لغتك", "language.note": "سيتذكر TUTUT هذه اللغة على هذا الجهاز.",
    "signin.eyebrow": "تذكرني", "signin.title": "سجّل الدخول أسرع في المرة القادمة.", "signin.body": "استخدم اسمًا وكلمة مرور بسيطة في TUTUT. قد يعرض المتصفح حفظ كلمة المرور في مدير كلمات المرور الخاص به.", "signin.name": "اسمك", "signin.password": "كلمة المرور", "signin.button": "احفظ على هذا الجهاز", "signin.saved": "تم الحفظ. أهلاً بعودتك، {name}. قد يسألك المتصفح إذا كنت تريد حفظ كلمة المرور.", "signin.needName": "يرجى إدخال اسمك أولاً.",
    "help.eyebrow": "ابدأ هنا", "help.title": "كيف يمكننا مساعدتك؟", "help.body": "اختر موضوعًا أو ابحث بكلماتك.", "search.label": "ابحث عن إجابة", "search.placeholder": "جرّب “الهاتف بطيء” أو “النوافذ المنبثقة”", "search.noResults": "لم نجد ذلك بعد. جرّب عبارة أقصر مثل “Wi‑Fi” أو “كلمة المرور”.",
    "device.label": "أستخدم:", "device.all": "أي جهاز", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "كمبيوتر",
    "topics.slow.title": "هاتفي بطيء", "topics.slow.sub": "خطوات بسيطة لتسريعه", "topics.popups.title": "نوافذ منبثقة وتحذيرات غريبة", "topics.popups.sub": "اعرف ما الآمن إغلاقه", "topics.wifi.title": "الـ Wi‑Fi لا يعمل", "topics.wifi.sub": "اتصل مرة أخرى", "topics.messages.title": "الرسائل والصور", "topics.messages.sub": "أرسل واستقبل واعثر عليها", "topics.passwords.title": "كلمات المرور وتسجيل الدخول", "topics.passwords.sub": "طرق آمنة للدخول مرة أخرى", "topics.scams.title": "هل هذه عملية احتيال؟", "topics.scams.sub": "توقف وتحقق قبل التصرف",
    "learn.eyebrow": "تعلّم بلا ضغط", "learn.title": "دروس صغيرة. مهارات مفيدة.", "learn.one.title": "أساسيات الهاتف", "learn.one.body": "الأزرار والصوت والشحن والعودة إلى الشاشة الرئيسية.", "learn.two.title": "التقاط الصور ومشاركتها", "learn.two.body": "احتفظ باللحظات المهمة قريبة منك.", "learn.three.title": "تصفح أكثر أمانًا", "learn.three.body": "تعرّف على الإعلانات والروابط الحقيقية وعلامات التحذير.",
    "safety.eyebrow": "وعد السلامة من TUTUT", "safety.title": "لن نطلب كلمة مرورك أبدًا.", "safety.body": "لا تشارك كلمة مرور أو رقم بنك أو رمز أمان وصلك برسالة مع شخص تواصل معك فجأة. المساعد الحقيقي سيدعك تكتب المعلومات الخاصة بنفسك.", "footer": "مساعدة تقنية ودودة للجميع.", "dialog.close": "أغلق هذا الدليل", "guide.good": "من الجيد أن تعرف:"
  },
  fr: {
    "nav.help": "Aide", "nav.learn": "Apprendre", "nav.safety": "Sécurité", "text.large": "Texte plus grand", "text.regular": "Texte normal",
    "hero.eyebrow": "Aide technologique à votre rythme", "hero.title": "Rendons la technologie plus facile.", "hero.intro": "Des réponses claires pour téléphones, tablettes et ordinateurs. Pas de mots compliqués. Aucun jugement. Aucun téléchargement.", "hero.cta": "De quoi avez-vous besoin ?", "hero.bubbleTitle": "Prenez votre temps.", "hero.bubbleText": "Vous ne casserez rien en lisant ces guides.",
    "trust.free": "Gratuit à lire", "trust.account": "Compte facultatif", "trust.plain": "Langage simple", "language.label": "Choisissez votre langue", "language.note": "TUTUT mémorise cette langue sur cet appareil.",
    "signin.eyebrow": "Se souvenir de moi", "signin.title": "Connectez-vous plus vite la prochaine fois.", "signin.body": "Utilisez un nom et un mot de passe TUTUT simples. Votre navigateur peut proposer d’enregistrer le mot de passe dans son gestionnaire.", "signin.name": "Votre nom", "signin.password": "Mot de passe", "signin.button": "Enregistrer sur cet appareil", "signin.saved": "Enregistré. Bon retour, {name}. Votre navigateur peut demander s’il doit enregistrer ce mot de passe.", "signin.needName": "Veuillez d’abord entrer votre nom.",
    "help.eyebrow": "Commencez ici", "help.title": "Comment pouvons-nous aider ?", "help.body": "Choisissez un sujet ou cherchez avec vos propres mots.", "search.label": "Chercher une réponse", "search.placeholder": "Essayez « téléphone lent » ou « pop-ups »", "search.noResults": "Nous n’avons pas encore trouvé. Essayez une phrase plus courte, comme « Wi‑Fi » ou « mot de passe ».",
    "device.label": "J’utilise :", "device.all": "Tout appareil", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "Ordinateur",
    "topics.slow.title": "Mon téléphone est lent", "topics.slow.sub": "Étapes simples pour l’accélérer", "topics.popups.title": "Pop-ups et avertissements étranges", "topics.popups.sub": "Savoir quoi fermer sans risque", "topics.wifi.title": "Le Wi‑Fi ne fonctionne pas", "topics.wifi.sub": "Se reconnecter", "topics.messages.title": "Messages et photos", "topics.messages.sub": "Envoyer, recevoir et retrouver", "topics.passwords.title": "Mots de passe et connexion", "topics.passwords.sub": "Façons sûres de revenir", "topics.scams.title": "Est-ce une arnaque ?", "topics.scams.sub": "Arrêtez-vous et vérifiez avant d’agir",
    "learn.eyebrow": "Apprendre sans pression", "learn.title": "Petites leçons. Compétences utiles.", "learn.one.title": "Bases du téléphone", "learn.one.body": "Boutons, volume, recharge et retour à l’accueil.", "learn.two.title": "Prendre et partager des photos", "learn.two.body": "Gardez les moments importants près de vous.", "learn.three.title": "Navigation plus sûre", "learn.three.body": "Reconnaître les publicités, les vrais liens et les signes d’alerte.",
    "safety.eyebrow": "Promesse de sécurité TUTUT", "safety.title": "Nous ne demanderons jamais votre mot de passe.", "safety.body": "Ne partagez jamais un mot de passe, un numéro bancaire ou un code de sécurité reçu par texto avec quelqu’un qui vous contacte sans prévenir. Une vraie aide vous laissera saisir vous-même les informations privées.", "footer": "Aide technologique amicale pour tous.", "dialog.close": "Fermer ce guide", "guide.good": "Bon à savoir :"
  },
  ko: {
    "nav.help": "도움 받기", "nav.learn": "배우기", "nav.safety": "안전", "text.large": "글자 크게", "text.regular": "보통 글자",
    "hero.eyebrow": "내 속도에 맞춘 기술 도움", "hero.title": "기술을 더 쉽게 느끼게 해 봅시다.", "hero.intro": "휴대폰, 태블릿, 컴퓨터에 대한 쉬운 답변. 어려운 말 없음. 판단 없음. 다운로드 없음.", "hero.cta": "무엇을 도와드릴까요?", "hero.bubbleTitle": "천천히 하세요.", "hero.bubbleText": "이 안내를 읽는다고 고장 나지 않습니다.",
    "trust.free": "무료로 읽기", "trust.account": "계정은 선택", "trust.plain": "쉬운 말", "language.label": "언어 선택", "language.note": "TUTUT가 이 기기에서 언어를 기억합니다.",
    "signin.eyebrow": "나를 기억하기", "signin.title": "다음에는 더 빨리 로그인하세요.", "signin.body": "간단한 TUTUT 이름과 비밀번호를 사용하세요. 브라우저가 자체 비밀번호 관리자에 저장하라고 제안할 수 있습니다.", "signin.name": "이름", "signin.password": "비밀번호", "signin.button": "이 기기에 저장", "signin.saved": "저장되었습니다. 다시 오신 것을 환영합니다, {name}. 브라우저가 비밀번호 저장 여부를 물을 수 있습니다.", "signin.needName": "먼저 이름을 입력하세요.",
    "help.eyebrow": "여기서 시작", "help.title": "무엇을 도와드릴까요?", "help.body": "주제를 선택하거나 자신의 말로 검색하세요.", "search.label": "답변 검색", "search.placeholder": "“휴대폰 느림” 또는 “팝업”을 입력해 보세요", "search.noResults": "아직 찾지 못했습니다. “Wi‑Fi”나 “비밀번호”처럼 짧게 입력해 보세요.",
    "device.label": "사용 기기:", "device.all": "모든 기기", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "컴퓨터",
    "topics.slow.title": "휴대폰이 느려요", "topics.slow.sub": "빠르게 만드는 쉬운 단계", "topics.popups.title": "팝업과 이상한 경고", "topics.popups.sub": "안전하게 닫을 수 있는 것 알기", "topics.wifi.title": "Wi‑Fi가 안 돼요", "topics.wifi.sub": "다시 연결하기", "topics.messages.title": "문자와 사진", "topics.messages.sub": "보내고 받고 찾기", "topics.passwords.title": "비밀번호와 로그인", "topics.passwords.sub": "안전하게 다시 들어가기", "topics.scams.title": "사기인가요?", "topics.scams.sub": "행동하기 전에 멈추고 확인",
    "learn.eyebrow": "부담 없이 배우기", "learn.title": "짧은 수업. 유용한 기술.", "learn.one.title": "휴대폰 기본", "learn.one.body": "버튼, 음량, 충전, 홈으로 가기.", "learn.two.title": "사진 찍고 공유하기", "learn.two.body": "소중한 순간을 가까이 두세요.", "learn.three.title": "더 안전한 인터넷 사용", "learn.three.body": "광고, 진짜 링크, 경고 신호 알아보기.",
    "safety.eyebrow": "TUTUT 안전 약속", "safety.title": "우리는 절대 비밀번호를 묻지 않습니다.", "safety.body": "갑자기 연락한 사람에게 비밀번호, 은행 번호, 문자 보안 코드를 알려주지 마세요. 진짜 도움을 주는 사람은 개인 정보를 직접 입력하게 합니다.", "footer": "모두를 위한 친절한 기술 도움.", "dialog.close": "이 안내 닫기", "guide.good": "알아두세요:"
  },
  ru: {
    "nav.help": "Помощь", "nav.learn": "Учиться", "nav.safety": "Безопасность", "text.large": "Крупнее текст", "text.regular": "Обычный текст",
    "hero.eyebrow": "Помощь с техникой в вашем темпе", "hero.title": "Сделаем технологии проще.", "hero.intro": "Понятные ответы о телефонах, планшетах и компьютерах. Без сложных слов. Без осуждения. Без загрузок.", "hero.cta": "С чем вам помочь?", "hero.bubbleTitle": "Не спешите.", "hero.bubbleText": "Чтение этих инструкций ничего не сломает.",
    "trust.free": "Бесплатно", "trust.account": "Аккаунт по желанию", "trust.plain": "Простой язык", "language.label": "Выберите язык", "language.note": "TUTUT запомнит этот язык на этом устройстве.",
    "signin.eyebrow": "Запомнить меня", "signin.title": "В следующий раз войдите быстрее.", "signin.body": "Используйте простое имя и пароль TUTUT. Браузер может предложить сохранить пароль в своем менеджере паролей.", "signin.name": "Ваше имя", "signin.password": "Пароль", "signin.button": "Сохранить на этом устройстве", "signin.saved": "Сохранено. С возвращением, {name}. Браузер может спросить, сохранить ли этот пароль.", "signin.needName": "Сначала введите имя.",
    "help.eyebrow": "Начните здесь", "help.title": "Чем мы можем помочь?", "help.body": "Выберите тему или ищите своими словами.", "search.label": "Найти ответ", "search.placeholder": "Попробуйте «телефон медленный» или «всплывающие окна»", "search.noResults": "Мы пока не нашли это. Попробуйте короче: «Wi‑Fi» или «пароль».",
    "device.label": "Я использую:", "device.all": "Любое устройство", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "Компьютер",
    "topics.slow.title": "Телефон медленно работает", "topics.slow.sub": "Простые шаги для ускорения", "topics.popups.title": "Всплывающие окна и странные предупреждения", "topics.popups.sub": "Что безопасно закрыть", "topics.wifi.title": "Wi‑Fi не работает", "topics.wifi.sub": "Подключиться снова", "topics.messages.title": "Сообщения и фото", "topics.messages.sub": "Отправлять, получать и находить", "topics.passwords.title": "Пароли и вход", "topics.passwords.sub": "Безопасно войти снова", "topics.scams.title": "Это мошенничество?", "topics.scams.sub": "Остановитесь и проверьте перед действием",
    "learn.eyebrow": "Учитесь без давления", "learn.title": "Короткие уроки. Полезные навыки.", "learn.one.title": "Основы телефона", "learn.one.body": "Кнопки, громкость, зарядка и возврат домой.", "learn.two.title": "Фото и обмен ими", "learn.two.body": "Сохраняйте важные моменты рядом.", "learn.three.title": "Более безопасный просмотр", "learn.three.body": "Распознавайте рекламу, настоящие ссылки и предупреждения.",
    "safety.eyebrow": "Обещание безопасности TUTUT", "safety.title": "Мы никогда не попросим ваш пароль.", "safety.body": "Никогда не сообщайте пароль, банковский номер или код из SMS человеку, который связался с вами неожиданно. Настоящий помощник позволит вам вводить личную информацию самостоятельно.", "footer": "Дружелюбная помощь с технологиями для всех.", "dialog.close": "Закрыть инструкцию", "guide.good": "Полезно знать:"
  },
  pt: {
    "nav.help": "Ajuda", "nav.learn": "Aprender", "nav.safety": "Segurança", "text.large": "Texto maior", "text.regular": "Texto normal",
    "hero.eyebrow": "Ajuda com tecnologia no seu ritmo", "hero.title": "Vamos deixar a tecnologia mais fácil.", "hero.intro": "Respostas claras para telefones, tablets e computadores. Sem palavras confusas. Sem julgamento. Sem downloads.", "hero.cta": "Com o que você precisa de ajuda?", "hero.bubbleTitle": "Vá com calma.", "hero.bubbleText": "Você não vai quebrar nada lendo estes guias.",
    "trust.free": "Grátis para ler", "trust.account": "Conta opcional", "trust.plain": "Linguagem simples", "language.label": "Escolha seu idioma", "language.note": "O TUTUT lembra este idioma neste dispositivo.",
    "signin.eyebrow": "Lembrar de mim", "signin.title": "Entre mais rápido na próxima vez.", "signin.body": "Use um nome e senha simples do TUTUT. Seu navegador pode oferecer salvar a senha no gerenciador de senhas dele.", "signin.name": "Seu nome", "signin.password": "Senha", "signin.button": "Salvar neste dispositivo", "signin.saved": "Salvo. Bem-vindo de volta, {name}. Seu navegador pode perguntar se deseja salvar esta senha.", "signin.needName": "Digite seu nome primeiro.",
    "help.eyebrow": "Comece aqui", "help.title": "Como podemos ajudar?", "help.body": "Escolha um assunto ou pesquise com suas próprias palavras.", "search.label": "Pesquisar uma resposta", "search.placeholder": "Tente “telefone lento” ou “pop-ups”", "search.noResults": "Ainda não encontramos isso. Tente uma frase mais curta, como “Wi‑Fi” ou “senha”.",
    "device.label": "Eu uso:", "device.all": "Qualquer dispositivo", "device.iphone": "iPhone / iPad", "device.android": "Android", "device.computer": "Computador",
    "topics.slow.title": "Meu telefone está lento", "topics.slow.sub": "Passos simples para acelerar", "topics.popups.title": "Pop-ups e avisos estranhos", "topics.popups.sub": "Saiba o que é seguro fechar", "topics.wifi.title": "O Wi‑Fi não funciona", "topics.wifi.sub": "Conecte de novo", "topics.messages.title": "Mensagens e fotos", "topics.messages.sub": "Envie, receba e encontre", "topics.passwords.title": "Senhas e login", "topics.passwords.sub": "Formas seguras de entrar de novo", "topics.scams.title": "Isso é golpe?", "topics.scams.sub": "Pare e verifique antes de agir",
    "learn.eyebrow": "Aprenda sem pressão", "learn.title": "Pequenas lições. Habilidades úteis.", "learn.one.title": "Noções básicas do telefone", "learn.one.body": "Botões, volume, carregamento e voltar para a tela inicial.", "learn.two.title": "Tirar e compartilhar fotos", "learn.two.body": "Mantenha perto os momentos importantes.", "learn.three.title": "Navegação mais segura", "learn.three.body": "Reconheça anúncios, links reais e sinais de alerta.",
    "safety.eyebrow": "Promessa de segurança do TUTUT", "safety.title": "Nunca pediremos sua senha.", "safety.body": "Nunca compartilhe senha, número bancário ou código de segurança por mensagem com alguém que entrou em contato inesperadamente. Um ajudante real deixará você digitar informações privadas por conta própria.", "footer": "Ajuda tecnológica amigável para todos.", "dialog.close": "Fechar este guia", "guide.good": "Bom saber:"
  }
};

const reusableGuideLanguages = ["zh", "tl", "vi", "ar", "fr", "ko", "ru", "pt"];
reusableGuideLanguages.forEach((language) => {
  translations[language].guides = translations.en.guides;
});

const dialog = document.querySelector("#guide-dialog");
const guideContent = document.querySelector("#guide-content");
const topicCards = [...document.querySelectorAll(".topic-card")];
const communityGrid = document.querySelector(".question-grid");
const deviceButtons = [...document.querySelectorAll(".device-button")];
const searchInput = document.querySelector("#help-search");
const noResults = document.querySelector("#no-results");
const textSizeButton = document.querySelector("#text-size-button");
const nightModeButton = document.querySelector("#night-mode-button");
const colorModeButton = document.querySelector("#color-mode-button");
const languageSelect = document.querySelector("#language-select");
const signinForm = document.querySelector("#signin-form");
const patronNameInput = document.querySelector("#patron-name");
const signinMessage = document.querySelector("#signin-message");
const helpbotDialog = document.querySelector("#helpbot-dialog");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatWindow = document.querySelector("#chat-window");
const quizProgress = document.querySelector("#quiz-progress");
const quizScore = document.querySelector("#quiz-score");
const quizStreak = document.querySelector("#quiz-streak");
const quizCategory = document.querySelector("#quiz-category");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNextButton = document.querySelector("#quiz-next");
const quizSoundButton = document.querySelector("#quiz-sound-toggle");
const quizRestartButton = document.querySelector("#quiz-restart");
const achievementList = document.querySelector("#achievement-list");
const achievementToast = document.querySelector("#achievement-toast");
const quizResultsDialog = document.querySelector("#quiz-results-dialog");
const quizResultsGrid = document.querySelector("#quiz-results-grid");
const quizResultsSummary = document.querySelector("#quiz-results-summary");
const closeQuizResultsButton = document.querySelector("#close-quiz-results");
let selectedDevice = "all";
let currentLanguage = localStorage.getItem("tutut-language") || "en";
const displayPreferences = {
  largeText: localStorage.getItem("tutut-large-text") === "true",
  nightMode: localStorage.getItem("tutut-night-mode") === "true",
  colorBlind: localStorage.getItem("tutut-color-blind") === "true"
};

const answerWellStorageKey = "tutut-answer-well";
const successfulQuestionBank = [
  {
    question: "My phone is hot, slow, and the storage is almost full. What should I do first?",
    answer: "This is a combined heat, speed, and storage problem. 1. Stop charging and let the phone cool if it feels hot. 2. Close maps, video, and social media apps. 3. Restart the phone. 4. Delete large videos or unused apps until storage is no longer almost full. 5. Install updates after the phone is cool and charged.",
    keywords: ["hot", "overheat", "slow", "storage", "full", "maps", "video", "restart"]
  },
  {
    question: "A pop-up says I have a virus and my phone is slow. Should I download the cleaner app?",
    answer: "No. Do not download a cleaner app from a pop-up. Close the browser tab or app first. Then restart the phone and check storage in Settings. If warnings return, clear browser history and only use the Apple App Store or Google Play for apps.",
    keywords: ["virus", "pop-up", "popup", "warning", "cleaner", "slow", "download"]
  },
  {
    question: "My phone is cracked, not charging well, and I need to know whether to repair or replace it.",
    answer: "Start by backing it up if it still turns on. Then check your carrier account, AppleCare, Samsung Care, or insurance plan for claim options. Compare the deductible, repair price, replacement price, warranty, and repair shop ratings. If repair costs close to a newer phone, replacement may make more sense.",
    keywords: ["cracked", "broken", "charging", "repair", "replace", "claim", "insurance", "carrier"]
  },
  {
    question: "Someone called saying they are from my bank and need a code from my text messages.",
    answer: "Treat that as a scam warning. Do not share the code. Hang up. Call the bank using the number on the back of your card or statement. If you already shared a code or payment information, call the bank immediately and ask them to secure the account.",
    keywords: ["bank", "code", "text", "scam", "called", "security", "payment"]
  },
  {
    question: "My Wi-Fi is not working and I also forgot my password.",
    answer: "First decide which password is missing. If it is the home Wi-Fi password, look on the router label or ask the account holder. If it is an app or email password, use the official Forgot password button. Do not press the tiny Reset hole on the router unless your internet company tells you to.",
    keywords: ["wifi", "wi-fi", "internet", "password", "router", "forgot", "reset"]
  },
  {
    question: "I clicked a suspicious link and now I am worried my phone has been hacked.",
    answer: "Do not panic. Close the page, do not enter passwords, and do not call numbers from the warning. Change the password for the account involved using the official app or website. Turn on two-step verification if offered. If banking or payment info was entered, call the bank using the official number.",
    keywords: ["clicked", "link", "suspicious", "hacked", "password", "bank", "warning"]
  }
];
const answerWellSeeds = successfulQuestionBank.map((item, index) => ({
  ...item,
  id: `seed-${index + 1}`,
  helpfulCount: 3,
  useCount: 0,
  downCount: 0,
  comments: [],
  source: "seed"
}));

const quizQuestionBank = [
  {
    category: "Pop-ups and viruses",
    question: "A pop-up says your phone has a virus. What should you do first?",
    correct: "Close the browser tab or app without tapping the warning.",
    options: ["Call the number in the pop-up.", "Download the advertised cleaner app.", "Enter a payment card to remove the virus."]
  },
  {
    category: "Phone storage",
    question: "Your phone storage is almost full. What is a sensible first step?",
    correct: "Delete large videos and apps you no longer use.",
    options: ["Install several cleaner apps.", "Replace the SIM card.", "Turn the brightness all the way up."]
  },
  {
    category: "Wi-Fi",
    question: "Every device in the house has lost Wi-Fi. What should you try?",
    correct: "Unplug the internet box for 30 seconds, reconnect it, and wait.",
    options: ["Press and hold the tiny Reset hole.", "Buy a new phone immediately.", "Share your Wi-Fi password in a public post."]
  },
  {
    category: "Passwords",
    question: "You forgot an account password. What is the safest way back in?",
    correct: "Use the official app or website’s “Forgot password?” option.",
    options: ["Tell the password to someone who calls you.", "Keep guessing until the account locks.", "Use the same easy password on every account."]
  },
  {
    category: "Facebook",
    question: "Facebook shows a person under “People You May Know.” What does that mean?",
    correct: "Facebook is recommending them; you are not automatically following or friending them.",
    options: ["They are already your friend.", "They searched for you today.", "You must accept their friend request."]
  },
  {
    category: "Facebook Feed",
    question: "You want fewer posts like one in your Facebook Feed. What can you do?",
    correct: "Tap the three dots and choose Not interested, Show less, or Hide post.",
    options: ["Reply with your password.", "Delete your entire phone.", "Tap every advertisement on the post."]
  },
  {
    category: "AI videos",
    question: "What is the best way to decide whether a surprising AI-looking video is trustworthy?",
    correct: "Check the original source and confirm it with other reliable sources.",
    options: ["Believe it if the hands look normal.", "Believe it if many people shared it.", "Trust it whenever there is no AI label."]
  },
  {
    category: "AI voice calls",
    question: "A caller sounds like your grandchild and urgently asks for bail money. What should you do?",
    correct: "Hang up and call your grandchild or family using a number you already know.",
    options: ["Send gift cards before the call ends.", "Keep the emergency secret from everyone.", "Read your bank and security-code information aloud."]
  },
  {
    category: "FaceTime scams",
    question: "An unexpected FaceTime caller claims to be your bank and asks to see your screen. What is safest?",
    correct: "End the call and contact the bank using the number on your card or official app.",
    options: ["Share your screen and open the bank app.", "Give them remote control of the phone.", "Read them the code your bank texts you."]
  },
  {
    category: "Instagram scams",
    question: "A direct message says Instagram Security needs your password immediately. What should you do?",
    correct: "Do not click or reply; check official Instagram emails and settings yourself.",
    options: ["Send the password before the account closes.", "Pay the sender for verification.", "Forward your login code to prove your identity."]
  },
  {
    category: "Snapchat scams",
    question: "Someone in Snapchat Chat claims to be Snapchat Support and asks for your login. What should you do?",
    correct: "Do not provide it; press and hold the message or account and report it.",
    options: ["Send your login because support asked.", "Pay a support fee with cryptocurrency.", "Give them access to your email too."]
  },
  {
    category: "TikTok scams",
    question: "A TikTok message promises free followers if you sign in through its link. What should you do?",
    correct: "Do not open the link; delete or report the message.",
    options: ["Sign in quickly before the offer expires.", "Send your verification code to the sender.", "Pay first to unlock the free followers."]
  },
  {
    category: "Phone repair",
    question: "Your cracked phone still turns on. What should you do before handing it to a repair shop?",
    correct: "Back it up, check coverage, and compare reputable repair options.",
    options: ["Give the shop every account password.", "Ignore a swollen or smoking battery.", "Choose a shop without checking price or reviews."]
  },
  {
    category: "Overheating",
    question: "Your phone displays a heat warning. What should you do?",
    correct: "Stop using it, remove it from heat, and let it cool before charging or using it again.",
    options: ["Put it under a pillow while charging.", "Keep playing videos at full brightness.", "Cool it quickly by putting it in water."]
  }
];

const quizAchievementDefinitions = [
  { id: "first", symbol: "1", nameKey: "quiz.badge.first.name", bodyKey: "quiz.badge.first.body" },
  { id: "streak", symbol: "3", nameKey: "quiz.badge.streak.name", bodyKey: "quiz.badge.streak.body" },
  { id: "five", symbol: "5", nameKey: "quiz.badge.five.name", bodyKey: "quiz.badge.five.body" },
  { id: "perfect", symbol: "★", nameKey: "quiz.badge.perfect.name", bodyKey: "quiz.badge.perfect.body" }
];

let quizSoundEnabled = localStorage.getItem("tutut-quiz-sound") !== "off";
const quizSounds = {
  correct: {
    audio: new Audio("assets/audio/train-horn.ogg"),
    startAt: 0.15,
    duration: 2.2,
    volume: 0.58
  },
  incorrect: {
    audio: new Audio("assets/audio/wrong-answer-brake-screech.mp3"),
    startAt: 0,
    duration: 1.8,
    volume: 0.42
  }
};
let quizSoundTimer;
let quizSoundRequest = 0;
let quizState = { questions: [], optionOrder: [], selectedAnswers: [], index: 0, score: 0, streak: 0, answered: false, complete: false };

Object.values(quizSounds).forEach(({ audio }) => {
  audio.preload = "auto";
});

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function applyTemplate(text, values) {
  return text.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem("tutut-language", currentLanguage);
  languageSelect.value = currentLanguage;
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.title = `TUTUT | ${t("hero.eyebrow")}`;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      element.setAttribute(attribute, t(key));
    });
  });

  document.querySelectorAll(".mascot-clickable").forEach((mascot) => {
    mascot.setAttribute("aria-label", t("helpbot.open"));
  });

  updateDisplayButtons();
  renderTopCommunityQuestions();
  updateQuizChrome();
  filterTopics();
}

function updateDisplayButtons() {
  textSizeButton.setAttribute("aria-pressed", String(displayPreferences.largeText));
  nightModeButton.setAttribute("aria-pressed", String(displayPreferences.nightMode));
  colorModeButton.setAttribute("aria-pressed", String(displayPreferences.colorBlind));

  textSizeButton.innerHTML = `<span aria-hidden="true">Aa</span> <span>${displayPreferences.largeText ? t("text.regular") : t("text.large")}</span>`;
  nightModeButton.innerHTML = `<span aria-hidden="true">☾</span> <span>${displayPreferences.nightMode ? t("display.nightOff") : t("display.nightOn")}</span>`;
  colorModeButton.innerHTML = `<span aria-hidden="true">◐</span> <span>${displayPreferences.colorBlind ? t("display.colorOff") : t("display.colorOn")}</span>`;
}

function applyDisplayPreferences() {
  document.body.classList.toggle("large-text", displayPreferences.largeText);
  document.body.classList.toggle("night-mode", displayPreferences.nightMode);
  document.body.classList.toggle("color-blind-mode", displayPreferences.colorBlind);
  localStorage.setItem("tutut-large-text", String(displayPreferences.largeText));
  localStorage.setItem("tutut-night-mode", String(displayPreferences.nightMode));
  localStorage.setItem("tutut-color-blind", String(displayPreferences.colorBlind));
  updateDisplayButtons();
}

function openGuide(guideName) {
  const guide = translations[currentLanguage].guides?.[guideName] || translations.en.guides[guideName];
  const warning = guide.warning ? `<p class="guide-warning">${guide.warning}</p>` : "";
  const steps = guide.steps.map((step) => `<li>${step}</li>`).join("");

  guideContent.innerHTML = `
    <h2 id="guide-title">${guide.title}</h2>
    <p class="guide-intro">${guide.intro}</p>
    ${warning}
    <ol class="steps">${steps}</ol>
    <p class="guide-note"><strong>${t("guide.good")}</strong> ${guide.note}</p>
  `;
  dialog.showModal();
}

function filterTopics() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  topicCards.forEach((card) => {
    const matchesDevice = selectedDevice === "all" || card.dataset.devices.includes(selectedDevice);
    const matchesSearch = !query || card.dataset.search.includes(query) || card.textContent.toLowerCase().includes(query);
    const visible = matchesDevice && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  noResults.hidden = visibleCount !== 0;
}

function restorePatron() {
  const patronName = localStorage.getItem("tutut-patron-name");
  if (!patronName) return;
  patronNameInput.value = patronName;
  signinMessage.textContent = applyTemplate(t("signin.saved"), { name: patronName });
  renderTopCommunityQuestions();
}

function placeIntroFeaturesNearWelcome() {
  const welcomeSection = document.querySelector(".welcome-section");
  const quizSection = document.querySelector("#track-challenge");
  const learnSection = document.querySelector("#learn");
  if (!welcomeSection || !quizSection || !learnSection) return;

  const parent = welcomeSection.parentNode;
  parent.insertBefore(quizSection, welcomeSection.nextSibling);
  parent.insertBefore(learnSection, quizSection.nextSibling);
}

function organizeTipsBySeverity() {
  const tipsGrid = document.querySelector(".tips-grid");
  if (!tipsGrid || tipsGrid.querySelector(".tip-column")) return;

  const severityByTip = {
    1: 2, 2: 2, 3: 1, 4: 4, 5: 4,
    6: 10, 7: 9, 8: 8, 9: 6, 10: 10,
    11: 1, 12: 10, 13: 6, 14: 6, 15: 8,
    16: 7, 17: 7, 18: 9, 19: 3, 20: 1
  };
  const severityDetails = (score) => {
    if (score >= 9) return { className: "severity-urgent", key: "severity.urgent" };
    if (score >= 6) return { className: "severity-high", key: "severity.high" };
    if (score >= 3) return { className: "severity-moderate", key: "severity.moderate" };
    return { className: "severity-low", key: "severity.low" };
  };
  const cards = [...tipsGrid.children].filter((element) => element.classList.contains("tip-card"));
  const groups = [
    { type: "do", cardClass: "do-card", titleKey: "tips.doGroup" },
    { type: "dont", cardClass: "dont-card", titleKey: "tips.dontGroup" }
  ];

  tipsGrid.innerHTML = "";

  groups.forEach((group) => {
    const column = document.createElement("section");
    column.className = `tip-column ${group.type}-column`;

    const heading = document.createElement("div");
    heading.className = "tip-column-heading";

    const title = document.createElement("h3");
    title.dataset.i18n = group.titleKey;

    const note = document.createElement("p");
    note.dataset.i18n = "tips.orderNote";

    const list = document.createElement("div");
    list.className = "tip-column-list";

    cards
      .filter((card) => card.classList.contains(group.cardClass))
      .map((card) => {
        const titleKey = card.querySelector("h3")?.dataset.i18n || "";
        const tipNumber = Number(titleKey.match(/tips\.(\d+)\./)?.[1] || 0);
        return { card, tipNumber, score: severityByTip[tipNumber] || 1 };
      })
      .sort((a, b) => a.score - b.score || a.tipNumber - b.tipNumber)
      .forEach(({ card, score }) => {
        const severity = severityDetails(score);
        card.classList.remove("severity-low", "severity-moderate", "severity-high", "severity-urgent");
        card.classList.add(severity.className);
        card.dataset.severity = String(score);

        const severityLabel = document.createElement("span");
        severityLabel.className = "severity-label";
        severityLabel.dataset.i18n = severity.key;

        const typeLabel = card.querySelector('[data-i18n="tips.do"], [data-i18n="tips.dont"]');
        const badgeRow = document.createElement("div");
        badgeRow.className = "tip-card-badges";
        badgeRow.append(typeLabel, severityLabel);
        card.insertBefore(badgeRow, card.querySelector("h3"));
        list.append(card);
      });

    heading.append(title, note);
    column.append(heading, list);
    tipsGrid.append(column);
  });
}

function shuffleQuizItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function getUnlockedAchievements() {
  try {
    return JSON.parse(localStorage.getItem("tutut-quiz-achievements")) || [];
  } catch {
    return [];
  }
}

function renderAchievements() {
  if (!achievementList) return;

  const unlocked = getUnlockedAchievements();
  achievementList.innerHTML = "";

  quizAchievementDefinitions.forEach((achievement) => {
    const earned = unlocked.includes(achievement.id);
    const badge = document.createElement("article");
    badge.className = `achievement-badge ${earned ? "earned" : "locked"}`;

    const symbol = document.createElement("span");
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = earned ? achievement.symbol : "?";

    const copy = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = t(achievement.nameKey);
    const body = document.createElement("p");
    body.textContent = t(achievement.bodyKey);

    copy.append(name, body);
    badge.append(symbol, copy);
    achievementList.append(badge);
  });
}

function showAchievementToast(achievement) {
  if (!achievementToast) return;

  achievementToast.textContent = applyTemplate(t("quiz.badgeUnlocked"), { name: t(achievement.nameKey) });
  achievementToast.hidden = false;
  window.clearTimeout(showAchievementToast.timer);
  showAchievementToast.timer = window.setTimeout(() => {
    achievementToast.hidden = true;
  }, 3200);
}

function unlockAchievement(id) {
  const unlocked = getUnlockedAchievements();
  if (unlocked.includes(id)) return;

  const achievement = quizAchievementDefinitions.find((item) => item.id === id);
  if (!achievement) return;

  localStorage.setItem("tutut-quiz-achievements", JSON.stringify([...unlocked, id]));
  renderAchievements();
  showAchievementToast(achievement);
}

function checkQuizAchievements() {
  if (quizState.score >= 1) unlockAchievement("first");
  if (quizState.streak >= 3) unlockAchievement("streak");
  if (quizState.score >= 5) unlockAchievement("five");
}

function stopQuizSounds() {
  quizSoundRequest += 1;
  window.clearTimeout(quizSoundTimer);
  Object.values(quizSounds).forEach(({ audio }) => {
    audio.pause();
  });
}

function playQuizSound(name) {
  if (!quizSoundEnabled) return;

  const sound = quizSounds[name];
  if (!sound) return;

  stopQuizSounds();
  const request = quizSoundRequest;
  const startPlayback = () => {
    if (!quizSoundEnabled || request !== quizSoundRequest) return;

    sound.audio.currentTime = sound.startAt;
    sound.audio.volume = sound.volume;
    sound.audio.play().then(() => {
      quizSoundTimer = window.setTimeout(() => {
        sound.audio.pause();
      }, sound.duration * 1000);
    }).catch(() => {
      // The written feedback remains available if a browser blocks audio playback.
    });
  };

  if (sound.audio.readyState >= HTMLMediaElement.HAVE_METADATA) {
    startPlayback();
  } else {
    sound.audio.addEventListener("loadedmetadata", startPlayback, { once: true });
    sound.audio.load();
  }
}

function playTrainSound() {
  playQuizSound("correct");
}

function playWrongAnswerSound() {
  playQuizSound("incorrect");
}

function updateQuizChrome() {
  if (!quizSoundButton) return;

  quizSoundButton.textContent = t(quizSoundEnabled ? "quiz.soundOn" : "quiz.soundOff");
  quizSoundButton.setAttribute("aria-pressed", String(quizSoundEnabled));
  renderAchievements();
}

function renderQuizQuestion() {
  if (!quizQuestion || !quizState.questions.length) return;

  const current = quizState.questions[quizState.index];
  quizState.answered = false;
  quizState.complete = false;
  quizProgress.textContent = `${quizState.index + 1} / ${quizState.questions.length}`;
  quizScore.textContent = String(quizState.score);
  quizStreak.textContent = String(quizState.streak);
  quizCategory.textContent = current.category;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  quizNextButton.hidden = true;
  quizOptions.innerHTML = "";

  const displayedAnswers = quizState.optionOrder[quizState.index]
    || shuffleQuizItems([current.correct, ...current.options]);
  quizState.optionOrder[quizState.index] = displayedAnswers;

  displayedAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = answer;
    button.addEventListener("click", () => selectQuizAnswer(button, answer, current));
    quizOptions.append(button);
  });
}

function selectQuizAnswer(selectedButton, answer, current) {
  if (quizState.answered) return;
  quizState.answered = true;
  quizState.selectedAnswers[quizState.index] = answer;

  const correct = answer === current.correct;
  [...quizOptions.querySelectorAll(".quiz-option")].forEach((button) => {
    button.disabled = true;
    if (button.textContent === current.correct) button.classList.add("correct-answer");
  });

  if (correct) {
    quizState.score += 1;
    quizState.streak += 1;
    selectedButton.classList.add("chosen-correct");
    quizFeedback.textContent = t("quiz.correct");
    quizFeedback.classList.add("correct-feedback");
    playTrainSound();
    checkQuizAchievements();
  } else {
    quizState.streak = 0;
    selectedButton.classList.add("wrong-answer");
    quizFeedback.textContent = t("quiz.incorrect");
    quizFeedback.classList.add("incorrect-feedback");
    playWrongAnswerSound();
  }

  quizScore.textContent = String(quizState.score);
  quizStreak.textContent = String(quizState.streak);
  quizNextButton.textContent = t(quizState.index === quizState.questions.length - 1 ? "quiz.finish" : "quiz.next");
  quizNextButton.hidden = false;
}

function completeQuiz() {
  quizState.complete = true;
  quizCategory.textContent = t("quiz.finalStop");
  quizQuestion.textContent = applyTemplate(t("quiz.complete"), {
    score: quizState.score,
    total: quizState.questions.length
  });
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";
  quizNextButton.hidden = true;
  quizProgress.textContent = `${quizState.questions.length} / ${quizState.questions.length}`;

  if (quizState.score === quizState.questions.length) unlockAchievement("perfect");

  renderQuizResults();
  quizResultsDialog.showModal();
}

function createQuizResultCard(question, questionIndex) {
  const card = document.createElement("article");
  const heading = document.createElement("div");
  const number = document.createElement("span");
  const category = document.createElement("span");
  const title = document.createElement("h3");
  const options = document.createElement("ul");

  card.className = "quiz-result-card";
  heading.className = "quiz-result-heading";
  number.className = "quiz-result-number";
  category.className = "quiz-result-category";
  options.className = "quiz-result-options";
  number.textContent = String(questionIndex + 1);
  category.textContent = question.category;
  title.textContent = question.question;

  const displayedAnswers = quizState.optionOrder[questionIndex]
    || [question.correct, ...question.options];
  const selectedAnswer = quizState.selectedAnswers[questionIndex];

  displayedAnswers.forEach((answer) => {
    const option = document.createElement("li");
    const answerText = document.createElement("span");
    answerText.textContent = answer;
    option.append(answerText);

    if (answer === question.correct) {
      const correctLabel = document.createElement("strong");
      option.className = "quiz-result-correct";
      correctLabel.textContent = `✓ ${t(answer === selectedAnswer ? "quiz.resultsSelectedCorrect" : "quiz.resultsCorrect")}`;
      option.append(correctLabel);
    } else if (answer === selectedAnswer) {
      const incorrectLabel = document.createElement("strong");
      option.className = "quiz-result-incorrect";
      incorrectLabel.textContent = `× ${t("quiz.resultsIncorrect")}`;
      option.append(incorrectLabel);
    }

    options.append(option);
  });

  heading.append(number, category);
  card.append(heading, title, options);
  return card;
}

function renderQuizResults() {
  quizResultsGrid.innerHTML = "";
  quizResultsSummary.textContent = applyTemplate(t("quiz.resultsSummary"), {
    score: quizState.score,
    total: quizState.questions.length
  });

  [quizState.questions.slice(0, 7), quizState.questions.slice(7, 14)].forEach((questions, columnIndex) => {
    const column = document.createElement("div");
    column.className = "quiz-results-column";
    questions.forEach((question, index) => {
      column.append(createQuizResultCard(question, index + (columnIndex * 7)));
    });
    quizResultsGrid.append(column);
  });
}

function restartQuiz() {
  quizState = {
    questions: shuffleQuizItems(quizQuestionBank),
    optionOrder: [],
    selectedAnswers: [],
    index: 0,
    score: 0,
    streak: 0,
    answered: false,
    complete: false
  };
  renderQuizQuestion();
  updateQuizChrome();
}

function openHelpbot() {
  helpbotDialog.showModal();
  chatInput.focus();
}

function addChatMessage(message, type = "bot", options = {}) {
  const bubble = document.createElement(options.canSave ? "div" : "p");
  bubble.className = `chat-message ${type}-message`;
  bubble.textContent = message;

  if (options.canSave) {
    const feedback = document.createElement("div");
    feedback.className = "chat-feedback";

    const saveButton = document.createElement("button");
    saveButton.className = "chat-save-button";
    saveButton.type = "button";
    saveButton.textContent = t("helpbot.saveSuccess");
    saveButton.addEventListener("click", () => {
      saveSuccessfulAnswer(options.question, message);
      saveButton.textContent = t("helpbot.savedSuccess");
      saveButton.disabled = true;
    });

    const notHelpfulButton = document.createElement("button");
    notHelpfulButton.className = "chat-save-button chat-secondary-button";
    notHelpfulButton.type = "button";
    notHelpfulButton.textContent = t("helpbot.notHelpful");

    const improvePanel = document.createElement("div");
    improvePanel.className = "chat-improve-panel";
    improvePanel.hidden = true;

    const improveLabel = document.createElement("label");
    const improveId = `better-answer-${Date.now()}`;
    improveLabel.setAttribute("for", improveId);
    improveLabel.textContent = t("helpbot.betterAnswerLabel");

    const improveInput = document.createElement("textarea");
    improveInput.id = improveId;
    improveInput.rows = 4;
    improveInput.placeholder = t("helpbot.betterAnswerPlaceholder");

    const improveActions = document.createElement("div");
    improveActions.className = "chat-feedback";

    const addAnswerButton = document.createElement("button");
    addAnswerButton.className = "chat-save-button";
    addAnswerButton.type = "button";
    addAnswerButton.textContent = t("helpbot.saveBetterAnswer");

    const improveMessage = document.createElement("p");
    improveMessage.className = "chat-feedback-note";

    notHelpfulButton.addEventListener("click", () => {
      improvePanel.hidden = false;
      notHelpfulButton.textContent = t("helpbot.addAnswer");
      improveInput.focus();
    });

    addAnswerButton.addEventListener("click", () => {
      const betterAnswer = improveInput.value.trim();

      if (!betterAnswer) {
        improveMessage.textContent = t("helpbot.needBetterAnswer");
        improveInput.focus();
        return;
      }

      saveSuccessfulAnswer(options.question, betterAnswer);
      improveMessage.textContent = t("helpbot.savedBetterAnswer");
      addAnswerButton.disabled = true;
      improveInput.disabled = true;
    });

    improveActions.append(addAnswerButton);
    improvePanel.append(improveLabel, improveInput, improveActions, improveMessage);
    feedback.append(saveButton, notHelpfulButton);
    bubble.append(feedback, improvePanel);
  }

  chatWindow.append(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getStoredAnswerWell() {
  try {
    const savedWell = JSON.parse(localStorage.getItem(answerWellStorageKey)) || [];
    const legacyAnswers = JSON.parse(localStorage.getItem("tutut-successful-answers")) || [];
    return compoundAnswerWell([
      ...savedWell,
      ...legacyAnswers.map((item) => ({
        ...item,
        helpfulCount: item.helpfulCount || 1,
        useCount: item.useCount || 0,
        downCount: item.downCount || 0,
        comments: item.comments || [],
        source: item.source || "local"
      }))
    ]);
  } catch {
    return [];
  }
}

function getAnswerWellEntries() {
  return compoundAnswerWell([...answerWellSeeds, ...getStoredAnswerWell()]);
}

function saveAnswerWell(entries, shouldRender = true) {
  const localOnly = compoundAnswerWell(entries)
    .filter((item) => item.source !== "seed")
    .slice(0, 80);

  localStorage.setItem(answerWellStorageKey, JSON.stringify(localOnly));
  if (shouldRender) renderTopCommunityQuestions();
}

function saveSuccessfulAnswer(question, answer) {
  const savedAnswers = getStoredAnswerWell();
  const normalizedQuestion = normalizeQuestion(question);
  const existing = savedAnswers.find((item) => normalizeQuestion(item.question) === normalizedQuestion);
  const nextAnswers = existing
    ? savedAnswers.map((item) => normalizeQuestion(item.question) === normalizedQuestion
      ? {
          ...item,
          answer,
          helpfulCount: (item.helpfulCount || 0) + 1,
          savedAt: new Date().toISOString()
        }
      : item)
    : [
        {
          id: `local-${Date.now()}`,
          question,
          answer,
          keywords: getQuestionWords(`${question} ${answer}`).slice(0, 18),
          helpfulCount: 1,
          useCount: 0,
          downCount: 0,
          comments: [],
          savedAt: new Date().toISOString(),
          source: "local"
        },
        ...savedAnswers
      ];

  saveAnswerWell(nextAnswers);
}

function updateAnswerFeedback(answerItem, feedback, shouldRender = true) {
  const normalizedQuestion = normalizeQuestion(answerItem.question);
  const storedAnswers = getStoredAnswerWell();
  const existing = storedAnswers.find((item) => normalizeQuestion(item.question) === normalizedQuestion);
  const baseItem = existing || {
    ...answerItem,
    source: "local",
    helpfulCount: answerItem.source === "seed" ? 0 : answerItem.helpfulCount || 0,
    useCount: answerItem.source === "seed" ? 0 : answerItem.useCount || 0,
    downCount: 0,
    comments: []
  };

  const updatedItem = {
    ...baseItem,
    source: "local",
    helpfulCount: (baseItem.helpfulCount || 0) + (feedback.up ? 1 : 0),
    downCount: (baseItem.downCount || 0) + (feedback.down ? 1 : 0),
    comments: feedback.comment
      ? [
          ...(baseItem.comments || []),
          {
            text: feedback.comment,
            createdAt: new Date().toISOString(),
            patron: getPatronDisplayName(baseItem, 0)
          }
        ].slice(-20)
      : (baseItem.comments || []),
    savedAt: new Date().toISOString()
  };

  const nextAnswers = [
    updatedItem,
    ...storedAnswers.filter((item) => normalizeQuestion(item.question) !== normalizedQuestion)
  ];

  saveAnswerWell(nextAnswers, shouldRender);
}

function rememberAnswerUse(answerItem) {
  if (!answerItem || answerItem.source === "seed") return;

  const nextAnswers = getStoredAnswerWell().map((item) => normalizeQuestion(item.question) === normalizeQuestion(answerItem.question)
    ? { ...item, useCount: (item.useCount || 0) + 1, lastUsedAt: new Date().toISOString() }
    : item);

  saveAnswerWell(nextAnswers);
}

function getPatronDisplayName(item, index) {
  if (item.source === "seed") return ["Maria G.", "Robert L.", "Linda P."][index] || "TUTUT";

  const patronName = localStorage.getItem("tutut-patron-name")?.trim();
  if (!patronName) return "TUTUT patron";

  const nameParts = patronName.split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  const lastInitial = nameParts.length > 1 ? `${lastName.charAt(0).toUpperCase()}.` : "";
  return [firstName, lastInitial].filter(Boolean).join(" ");
}

function getQuestionTheme(item) {
  const text = `${item.question} ${(item.keywords || []).join(" ")}`.toLowerCase();

  if (/(hot|heat|overheat|warm|maps|navigation|charging)/.test(text)) return { emoji: "🔥", className: "heat-card" };
  if (/(virus|pop.?up|warning|alert|scam|fraud|hacked|suspicious|bank|code)/.test(text)) return { emoji: "🚨", className: "alert-card" };
  if (/(storage|full|space|memory|photo|video)/.test(text)) return { emoji: "📦", className: "" };
  if (/(repair|replace|broken|crack|damage|claim|insurance)/.test(text)) return { emoji: "🛠️", className: "orange" };
  if (/(wi.?fi|wifi|internet|router|network)/.test(text)) return { emoji: "📶", className: "blue" };
  if (/(password|passcode|login|sign in|locked)/.test(text)) return { emoji: "🔐", className: "lavender" };
  return { emoji: "💬", className: "" };
}

function isAnsweredThisWeek(item) {
  const activityDate = item.lastUsedAt || item.savedAt;
  if (!activityDate) return item.source === "seed";

  const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
  return new Date(activityDate).getTime() >= sevenDaysAgo;
}

function getWeeklyTopAnswers() {
  const weeklyAnswers = getAnswerWellEntries()
    .filter(isAnsweredThisWeek)
    .map((item) => ({
      ...item,
      weeklyScore: ((item.helpfulCount || 0) * 3) + (item.useCount || 0) - (item.downCount || 0)
    }))
    .sort((a, b) => b.weeklyScore - a.weeklyScore);

  return weeklyAnswers.slice(0, 3);
}

function createQuestionFeedback(item, index) {
  const panel = document.createElement("div");
  panel.className = "question-feedback";

  const voteRow = document.createElement("div");
  voteRow.className = "question-votes";

  const upButton = document.createElement("button");
  upButton.type = "button";
  upButton.textContent = `👍 ${item.helpfulCount || 0}`;
  upButton.setAttribute("aria-label", t("feedback.up"));

  const downButton = document.createElement("button");
  downButton.type = "button";
  downButton.textContent = `👎 ${item.downCount || 0}`;
  downButton.setAttribute("aria-label", t("feedback.down"));

  const commentId = `question-comment-${index}-${Date.now()}`;
  const commentLabel = document.createElement("label");
  commentLabel.setAttribute("for", commentId);
  commentLabel.textContent = t("feedback.commentLabel");

  const commentInput = document.createElement("textarea");
  commentInput.id = commentId;
  commentInput.rows = 3;
  commentInput.placeholder = t("feedback.commentPlaceholder");

  const saveCommentButton = document.createElement("button");
  saveCommentButton.type = "button";
  saveCommentButton.textContent = t("feedback.saveComment");

  const message = document.createElement("p");
  message.className = "question-feedback-note";

  upButton.addEventListener("click", () => {
    updateAnswerFeedback(item, { up: true }, false);
    message.textContent = t("feedback.savedVote");
    upButton.disabled = true;
    window.setTimeout(renderTopCommunityQuestions, 900);
  });

  downButton.addEventListener("click", () => {
    updateAnswerFeedback(item, { down: true }, false);
    message.textContent = t("feedback.savedVote");
    downButton.disabled = true;
    window.setTimeout(renderTopCommunityQuestions, 900);
  });

  saveCommentButton.addEventListener("click", () => {
    const comment = commentInput.value.trim();

    if (!comment) {
      message.textContent = t("feedback.needComment");
      commentInput.focus();
      return;
    }

    updateAnswerFeedback(item, { comment }, false);
    message.textContent = t("feedback.savedComment");
    commentInput.value = "";
    saveCommentButton.disabled = true;
    window.setTimeout(renderTopCommunityQuestions, 1200);
  });

  voteRow.append(upButton, downButton);
  panel.append(voteRow, commentLabel, commentInput, saveCommentButton, message);
  return panel;
}

function createStorageMeter() {
  const storageMeter = document.createElement("div");
  storageMeter.className = "storage-meter";
  storageMeter.setAttribute("role", "img");
  storageMeter.setAttribute("aria-label", "Storage is almost full: 92 percent used");
  storageMeter.innerHTML = `
    <div class="storage-meter-top">
      <span>Storage</span>
      <strong>92%</strong>
    </div>
    <div class="storage-track" aria-hidden="true">
      <span class="storage-fill"></span>
    </div>
  `;
  return storageMeter;
}

function renderTopCommunityQuestions() {
  if (!communityGrid) return;

  communityGrid.innerHTML = "";

  getWeeklyTopAnswers().forEach((item, index) => {
    const theme = getQuestionTheme(item);
    const answerCount = Math.max((item.helpfulCount || 0) + (item.useCount || 0), 1);
    const downCount = item.downCount || 0;
    const commentCount = item.comments?.length || 0;
    const card = document.createElement("article");
    card.className = "question-card";

    const emoji = document.createElement("span");
    emoji.className = "card-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = theme.emoji;

    const meta = document.createElement("div");
    meta.className = "question-meta";

    const rank = document.createElement("span");
    rank.textContent = `#${index + 1} this week`;

    const patron = document.createElement("strong");
    patron.textContent = getPatronDisplayName(item, index);

    const stats = document.createElement("small");
    stats.className = "question-stats";
    stats.textContent = `Answered ${answerCount} time${answerCount === 1 ? "" : "s"} • ${downCount} down • ${commentCount} comment${commentCount === 1 ? "" : "s"}`;

    const title = document.createElement("h3");
    title.textContent = item.question;

    const answer = document.createElement("p");
    answer.textContent = item.answer;

    meta.append(rank, patron);
    card.append(emoji, meta, stats);
    if (theme.emoji === "📦") card.append(createStorageMeter());
    card.append(title, answer);
    card.append(createQuestionFeedback(item, index));
    communityGrid.append(card);
  });
}

function compoundAnswerWell(entries) {
  const answerMap = new Map();

  entries.forEach((entry) => {
    if (!entry?.question || !entry?.answer) return;

    const key = normalizeQuestion(entry.question);
    const existing = answerMap.get(key);
    const nextEntry = {
      id: entry.id || `well-${key}`,
      question: entry.question,
      answer: entry.answer,
      keywords: entry.keywords || getQuestionWords(`${entry.question} ${entry.answer}`).slice(0, 18),
      helpfulCount: entry.helpfulCount || 0,
      useCount: entry.useCount || 0,
      downCount: entry.downCount || 0,
      comments: entry.comments || [],
      savedAt: entry.savedAt || "",
      lastUsedAt: entry.lastUsedAt || "",
      source: entry.source || "local"
    };

    if (!existing) {
      answerMap.set(key, nextEntry);
      return;
    }

    answerMap.set(key, {
      ...existing,
      answer: nextEntry.helpfulCount >= existing.helpfulCount ? nextEntry.answer : existing.answer,
      keywords: [...new Set([...(existing.keywords || []), ...(nextEntry.keywords || [])])].slice(0, 24),
      helpfulCount: (existing.helpfulCount || 0) + (nextEntry.helpfulCount || 0),
      useCount: (existing.useCount || 0) + (nextEntry.useCount || 0),
      downCount: (existing.downCount || 0) + (nextEntry.downCount || 0),
      comments: [...(existing.comments || []), ...(nextEntry.comments || [])].slice(-20),
      savedAt: nextEntry.savedAt || existing.savedAt,
      lastUsedAt: nextEntry.lastUsedAt || existing.lastUsedAt,
      source: existing.source === "seed" && nextEntry.source !== "seed" ? nextEntry.source : existing.source
    });
  });

  return [...answerMap.values()].sort((a, b) => {
    const bRank = (b.helpfulCount || 0) * 3 + (b.useCount || 0) - (b.downCount || 0);
    const aRank = (a.helpfulCount || 0) * 3 + (a.useCount || 0) - (a.downCount || 0);
    return bRank - aRank;
  });
}

function normalizeQuestion(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getQuestionWords(text) {
  const stopWords = new Set(["the", "and", "for", "that", "this", "with", "what", "when", "where", "why", "how", "can", "should", "would", "could", "have", "from", "into", "about", "your", "you", "my", "phone"]);
  return normalizeQuestion(text)
    .split(" ")
    .filter((word) => word.length > 2 && !stopWords.has(word));
}

function scoreKnowledgeMatch(question, item) {
  const questionWords = new Set(getQuestionWords(question));
  const bankWords = new Set([...getQuestionWords(item.question), ...(item.keywords || []).map(normalizeQuestion)]);
  let score = 0;

  questionWords.forEach((word) => {
    if (bankWords.has(word)) score += 2;
    if ([...bankWords].some((bankWord) => bankWord.includes(word) || word.includes(bankWord))) score += 1;
  });

  const qualityBoost = Math.min(((item.helpfulCount || 0) * 0.03) + ((item.useCount || 0) * 0.01) - ((item.downCount || 0) * 0.02), 0.18);
  return (score / Math.max(questionWords.size, 1)) + qualityBoost;
}

function findHelpfulPastAnswer(question) {
  const candidates = getAnswerWellEntries()
    .map((item) => ({ ...item, score: scoreKnowledgeMatch(question, item) }))
    .sort((a, b) => b.score - a.score);

  return candidates[0]?.score >= 0.5 ? candidates[0] : null;
}

function getMatchedTopics(question) {
  const lowerQuestion = question.toLowerCase();
  const topicTests = [
    { name: "popups", test: /(virus|pop.?up|warning|cleaner|alert|hacked|suspicious|link)/, answer: t("helpbot.popups") },
    { name: "slow", test: /(slow|freeze|lag|stuck)/, answer: t("helpbot.slow") },
    { name: "wifi", test: /(wi.?fi|wifi|internet|router|network)/, answer: t("helpbot.wifi") },
    { name: "passwords", test: /(password|passcode|sign in|login|code|locked|forgot)/, answer: t("helpbot.passwords") },
    { name: "scams", test: /(scam|fraud|gift card|remote access|bank|suspicious|pressure)/, answer: t("helpbot.scams") },
    { name: "heat", test: /(hot|heat|overheat|warm|maps|navigation|charging)/, answer: t("helpbot.heat") },
    { name: "storage", test: /(storage|full|space|memory|photo|video)/, answer: t("helpbot.storage") },
    { name: "damage", test: /(damage|broken|crack|repair|replace|wet|water|claim|insurance|carrier)/, answer: t("helpbot.damage") }
  ];

  return topicTests.filter((topic) => topic.test.test(lowerQuestion));
}

function getHelpbotAnswer(question) {
  const lowerQuestion = question.toLowerCase();

  if (!lowerQuestion.trim()) return t("helpbot.empty");
  if (/(web search|search web|google|latest|current|near me|nearby)/.test(lowerQuestion)) return t("helpbot.internet");

  const helpfulPastAnswer = findHelpfulPastAnswer(question);
  if (helpfulPastAnswer) {
    rememberAnswerUse(helpfulPastAnswer);
    return `${t("helpbot.learned")}\n${helpfulPastAnswer.answer}`;
  }

  const matchedTopics = getMatchedTopics(question);
  if (matchedTopics.length > 1) {
    return `${t("helpbot.related")}\n${matchedTopics.map((topic, index) => `${index + 1}. ${topic.answer}`).join("\n")}`;
  }
  if (matchedTopics.length === 1) return matchedTopics[0].answer;

  return t("helpbot.default");
}

document.querySelectorAll(".mascot:not(.helpbot-avatar)").forEach((mascot) => {
  mascot.classList.add("mascot-clickable");
  mascot.setAttribute("role", "button");
  mascot.setAttribute("tabindex", "0");
  mascot.setAttribute("aria-label", t("helpbot.open"));
  mascot.removeAttribute("aria-hidden");
  mascot.removeAttribute("focusable");

  mascot.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openHelpbot();
  });

  mascot.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openHelpbot();
  });
});

topicCards.forEach((card) => {
  card.addEventListener("click", () => openGuide(card.dataset.guide));
});

deviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedDevice = button.dataset.device;
    deviceButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    filterTopics();
  });
});

searchInput.addEventListener("input", filterTopics);

languageSelect.addEventListener("change", () => {
  applyLanguage(languageSelect.value);
  restorePatron();
});

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const patronName = patronNameInput.value.trim();

  if (!patronName) {
    signinMessage.textContent = t("signin.needName");
    patronNameInput.focus();
    return;
  }

  localStorage.setItem("tutut-patron-name", patronName);
  signinMessage.textContent = applyTemplate(t("signin.saved"), { name: patronName });
});

document.querySelector("#close-guide").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#close-helpbot").addEventListener("click", () => helpbotDialog.close());
helpbotDialog.addEventListener("click", (event) => {
  if (event.target === helpbotDialog) helpbotDialog.close();
});

closeQuizResultsButton.addEventListener("click", () => quizResultsDialog.close());
quizResultsDialog.addEventListener("click", (event) => {
  if (event.target === quizResultsDialog) quizResultsDialog.close();
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  const answer = getHelpbotAnswer(question);

  addChatMessage(question || t("helpbot.empty"), "user");
  addChatMessage(answer, "bot", { canSave: Boolean(question), question });
  chatInput.value = "";
  chatInput.focus();
});

textSizeButton.addEventListener("click", () => {
  displayPreferences.largeText = !displayPreferences.largeText;
  applyDisplayPreferences();
});

nightModeButton.addEventListener("click", () => {
  displayPreferences.nightMode = !displayPreferences.nightMode;
  applyDisplayPreferences();
});

colorModeButton.addEventListener("click", () => {
  displayPreferences.colorBlind = !displayPreferences.colorBlind;
  applyDisplayPreferences();
});

quizNextButton.addEventListener("click", () => {
  if (quizState.index === quizState.questions.length - 1) {
    completeQuiz();
    return;
  }

  quizState.index += 1;
  renderQuizQuestion();
});

quizSoundButton.addEventListener("click", () => {
  quizSoundEnabled = !quizSoundEnabled;
  if (!quizSoundEnabled) stopQuizSounds();
  localStorage.setItem("tutut-quiz-sound", quizSoundEnabled ? "on" : "off");
  updateQuizChrome();
});

quizRestartButton.addEventListener("click", restartQuiz);

window.addEventListener("storage", (event) => {
  if (event.key === answerWellStorageKey || event.key === "tutut-patron-name") {
    renderTopCommunityQuestions();
  }
});

placeIntroFeaturesNearWelcome();
applyDisplayPreferences();
organizeTipsBySeverity();
applyLanguage(currentLanguage);
restorePatron();
restartQuiz();
