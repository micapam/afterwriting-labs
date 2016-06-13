define(['handlebars'], function(Handlebars) {

    this["JST"] = this["JST"] || {};

    this["JST"]["test/data/screenplays/fdx/header_note.fdx"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<FinalDraft DocumentType=\"Script\" Template=\"No\" Version=\"1\">\r\n  <Content>\r\n    <Paragraph Type=\"Scene Heading\">\r\n      <ScriptNote ID=\"1\">\r\n        <Paragraph>\r\n          <Text>Note in scene heading.</Text>\r\n        </Paragraph>\r\n      </ScriptNote>\r\n      <Text>INT. SCENE HEADING - DAY</Text>\r\n    </Paragraph>\r\n  </Content>\r\n</FinalDraft>\r\n";
    });

    this["JST"]["test/data/screenplays/fdx/note.fdx"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<FinalDraft DocumentType=\"Script\" Template=\"No\" Version=\"1\">\r\n  <Content>\r\n    <Paragraph Type=\"Action\">\r\n      <ScriptNote ID=\"2\">\r\n        <Paragraph>\r\n          <Text Font=\"Courier Final Draft\">Note in action. Note. Note. Note.</Text>\r\n        </Paragraph>\r\n      </ScriptNote>\r\n      <Text>Action. Action.</Text>\r\n    </Paragraph>\r\n  </Content>\r\n </FinalDraft>\r\n";
    });

    this["JST"]["test/data/screenplays/fdx/synopsis.fdx"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<FinalDraft DocumentType=\"Script\" Template=\"No\" Version=\"1\">\r\n  <Content>\r\n    <Paragraph Type=\"Scene Heading\">\r\n      <SceneProperties>\r\n        <Summary>\r\n          <Paragraph>\r\n            <Text>Here is the synopsis.</Text>\r\n          </Paragraph>\r\n        </Summary>\r\n      </SceneProperties>\r\n      <Text>INT. SCENE HEADING - DAY</Text>\r\n    </Paragraph>\r\n  </Content>\r\n</FinalDraft>\r\n";
    });

    this["JST"]["test/data/screenplays/client.fountain"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "Title: \r\n	_Screenplay title_\r\n	Second line\r\nCredit: written by\r\nAuthor: \r\n	Author 1,\r\n	**Author 2** & Author 3\r\nSource: script based on...\r\nNotes: \r\n	Additional notes (1)\r\n	Additional notes (2)\r\nDate: 01/12/2010\r\nContact:\r\n	e-mail: email@email.com\r\n    phone: +12 34 567 89\r\nCopyright: Licence info\r\n\r\n# Act 1: basic blocks\r\n\r\n## Sequence 1: scene heading, action, dialogue, parenthetical\r\n\r\nINT. BASIC BLOCKS - DAY\r\n\r\nAction. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action.\r\n\r\nAction. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action.\r\n\r\nHERO 1\r\nBlah blah blah blah.\r\n\r\nHERO 2\r\nBlah blah.\r\n(parenthetical)\r\nBlah blah.\r\n\r\nAction. action. action. action.\r\n\r\n## Sequence 2: boneyard and notes\r\n\r\nEXT. BASIC BLOCKS - NIGHT\r\n\r\nAction. Action. Action[[ (inline note)]]. Action.\r\n\r\n/*\r\n\r\nIgnored.\r\nIgnored. /* nested */\r\nIgnored.\r\n\r\n*/\r\n\r\nAction. action. action. action. /*ignored*/action. action. action. action. action. action. action. action. action. /*ignored /*nested*/ */action. action. action. action. action. action. action.\r\n\r\n[[Long long long long long long long long long long long long long long long long long long long long long long long long long long long long long...\r\n\r\n...multiline note]]\r\n\r\n## Sequence 3: Formatting\r\n\r\nINT. FORMATTING - DAY\r\n\r\nNormal test, _underline test_, *italic test*, **bold test**, ***bold and italic test***, _*underline and italic test*_, _**underline and bold test_**, _***underline, bold and italic test***_.\r\n\r\n_Long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long **(with nested bold)** long long long long underlined text._\r\n\r\n> CENTERED, **BOLD**, _UNDERLINE_ <\r\n\r\n> TRANSITION:\r\n\r\nPage break test...\r\n\r\n===\r\n\r\n.FORCED HEADER\r\n\r\nAction.\r\n\r\n# Act 2: Dialogue\r\n\r\nINT. SPLIT DIALOGUE - DUSK\r\n\r\nAction.\r\n\r\nHERO 1\r\nBlah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.\r\n\r\nAction.\r\n\r\nINT. DUAL DIALOGUE - NIGHT\r\n\r\nAction action.\r\n\r\nHERO 1\r\nBlah!\r\n\r\nHERO 2 ^\r\nBlah!\r\n\r\nHERO 3\r\nBlah?\r\n\r\nAction action.\r\n\r\n# Act 3: edge cases\r\n\r\nINT. LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG SCENE HEADER.\r\n\r\nAction.\r\n\r\nVERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY LONG NAME\r\nHello, my name is Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Name.\r\n\r\n# Act 4: Misc\r\n\r\n## Latin characters\r\n\r\nINT. LATIN TEST - DAWN\r\n\r\nLatin characters.\r\n\r\nPOLISH\r\nPchnąć w tę łódź jeża lub osiem skrzyń fig.\r\n\r\nGERMAN\r\nFalsches Üben von Xylophonmusik quält jeden größeren Zwerg.\r\n\r\nNORWEGIAN\r\nBlåbærsyltetøy\r\n\r\nSPANISH\r\nEl pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro.\r\n\r\n## Forced elements\r\n\r\n.WNĘTRZE. FORCED ELEMENTS - NIGHT\r\n\r\n!INT. ACTION\r\n\r\n@McCABE\r\n~Happy birthday to you!\r\n\r\n> FADE TO GREEN.\r\n\r\n## Sections and synopsis\r\n\r\n= Section synopsis\r\n\r\n### Subsection\r\n\r\n= Subsection synopsis\r\n\r\n= Additional synopsis\r\n\r\nINT. SCENE - DAY\r\n\r\n= Scene synopsis\r\n\r\nAction.\r\n\r\n# Act 5: Variables\r\n\r\nINT. $LOCATION - DAY\r\n\r\n$PROTAGONIST enters the $location. $Antagonist attacks him.\r\n\r\n$ANTAGONIST\r\nAaaaa!\r\n\r\n$Protagonists kills $Antagonist.\r\n\r\n$BOND.LAST\r\nMy name is $bond.last, $bond.name.\r\n\r\n> THE END.\r\n";
    });

    this["JST"]["test/data/screenplays/fdx/header_note.fountain"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "\r\nINT. SCENE HEADING - DAY\r\n\r\n[[Note in scene heading.]]\r\n";
    });

    this["JST"]["test/data/screenplays/fdx/note.fountain"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "\r\nAction. Action. [[Note in action. Note. Note. Note.]]\r\n";
    });

    this["JST"]["test/data/screenplays/fdx/synopsis.fountain"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "\r\nINT. SCENE HEADING - DAY\r\n\r\n= Here is the synopsis.\r\n";
    });

    this["JST"]["test/data/screenplays/test.fountain"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, '>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};


        return "[[Script note.\r\n- blah blah blah\r\n- blah blah blah\r\n]]\r\n\r\nTitle: \r\n	_Screenplay title_\r\n	Second line\r\nCredit: written by\r\nAuthor: \r\n	Author 1,\r\n	**Author 2** & Author 3\r\nSource: script based on...\r\nNotes: \r\n	Additional notes (1)\r\n	Additional notes (2)\r\nDate: 01/12/2010\r\nContact:\r\n	e-mail: email@email.com\r\n    phone: +12 34 567 89\r\nCopyright: Licence info\r\n\r\n# Act 1: basic blocks\r\n\r\n## Sequence 1: scene heading, action, dialogue, parenthetical\r\n\r\nINT. BASIC BLOCKS - DAY\r\n\r\nAction. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action.\r\n\r\nAction. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action. action.\r\n\r\nHERO 1\r\nBlah blah blah blah.\r\n\r\nHERO 2\r\nBlah blah.\r\n(parenthetical)\r\nBlah blah.\r\n\r\nAction. action. action. action.\r\n\r\n## Sequence 2: boneyard and notes\r\n\r\nEXT. BASIC BLOCKS - NIGHT\r\n\r\nAction. Action. Action[[ (inline note)]]. Action.\r\n\r\n/*\r\n\r\nIgnored.\r\nIgnored. /* nested */\r\nIgnored.\r\n\r\n*/\r\n\r\nAction. action. action. action. /*ignored*/action. action. action. action. action. action. action. action. action. /*ignored /*nested*/ */action. action. action. action. action. action. action.\r\n\r\n[[Long long long long long long long long long long long long long long long long long long long long long long long long long long long long long...\r\n\r\n...multiline note]]\r\n\r\n## Sequence 3: Formatting\r\n\r\nINT. FORMATTING - DAY\r\n\r\nNormal test, _underline test_, *italic test*, **bold test**, ***bold and italic test***, _*underline and italic test*_, _**underline and bold test_**, _***underline, bold and italic test***_.\r\n\r\n_Long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long **(with nested bold)** long long long long underlined text._\r\n\r\nEXT. ESCAPING FORMATTING - NIGHT\r\n\r\nWhat the f\\*ck! Escape\\_escape\\*escape. \r\n\r\n> CENTERED, **BOLD**, _UNDERLINE_ <\r\n\r\n> TRANSITION:\r\n\r\nPage break test...\r\n\r\n===\r\n\r\n.FORCED HEADER\r\n\r\nAction.\r\n\r\n# Act 2: Dialogue\r\n\r\nINT. SPLIT DIALOGUE - DUSK\r\n\r\nAction.\r\n\r\nHERO 1\r\nBlah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.\r\n\r\nAction.\r\n\r\nINT. DUAL DIALOGUE - NIGHT\r\n\r\nAction action.\r\n\r\nHERO 1\r\nBlah!\r\n\r\nHERO 2 ^\r\nBlah!\r\n\r\nHERO 3\r\nBlah?\r\n\r\nAction action.\r\n\r\n# Act 3: edge cases\r\n\r\nINT. LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG SCENE HEADER.\r\n\r\nAction.\r\n\r\nVERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY LONG NAME\r\nHello, my name is Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Name.\r\n\r\n# Act 4: Misc\r\n\r\n## Latin characters\r\n\r\nINT. LATIN TEST - DAWN\r\n\r\nLatin characters.\r\n\r\nPOLISH\r\nPchnąć w tę łódź jeża lub osiem skrzyń fig.\r\n\r\nGERMAN\r\nFalsches Üben von Xylophonmusik quält jeden größeren Zwerg.\r\n\r\nNORWEGIAN\r\nBlåbærsyltetøy\r\n\r\nSPANISH\r\nEl pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro.\r\n\r\n## Forced elements\r\n\r\n.WNĘTRZE. FORCED ELEMENTS - NIGHT\r\n\r\n!INT. ACTION\r\n\r\n@McCABE\r\n~Happy birthday to you!\r\n\r\n> FADE TO GREEN.\r\n\r\n## Sections and synopsis\r\n\r\n= Section synopsis\r\n\r\n### Subsection\r\n\r\n= Subsection synopsis\r\n\r\n= Additional synopsis\r\n\r\nINT. SCENE - DAY\r\n\r\n= Scene synopsis\r\n\r\nAction.\r\n\r\n> THE END.\r\n";
    });

    return this["JST"];

});