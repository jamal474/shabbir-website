export const commandToTag = {
    "i" : {
            "start" : '<i>',
            "end" : '</i>'
        },
    "b" : {
            "start" : '<b>',
            "end" : '</b>'
    },
    "mc" : {
        "start" : "<span style = 'background: -webkit-linear-gradient(45deg, hsl(220deg 100% 55%), #f56969); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight : 600'>",
        "end" : '</span>'
    },
    "sc" : {
        "start" : "<span style = 'color : #883d3d; font-weight : 600'>",
        "end" : "</span>"
    }
}

export function expandString(string) {
    
    var readingStyleFlag = false;
    var readingCommand = "";
    var commandStack  = [];
    var returnResult = "";
    for(const char of string)
    {
        if(char === '$')
        {
            readingStyleFlag = true;
        }
        else if(readingStyleFlag === true && char !== '{')
        {
            readingCommand = readingCommand + char;
        }
        else if(readingStyleFlag === true && char === '{')
        {
            readingStyleFlag = false;
            commandStack.push(readingCommand);
            returnResult = returnResult + commandToTag[readingCommand].start;
            readingCommand = "";

        }
        else if(char === '}')
        {
            var endCommand = commandStack.pop();
            returnResult = returnResult + commandToTag[endCommand].end;
        }
        else
        {
            returnResult = returnResult + char;
        }

    }

    return (
        returnResult
    );
}