
#pragma once

#include <map>
#include <vector>
#include <string>

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#include "cocos/scripting/js-bindings/manual/jsb_conversions.hpp"
#include "cocos/scripting/js-bindings/manual/jsb_global.h"

#define MAKE_V8_HAPPY \
se::ScriptEngine::getInstance()->clearException(); \
se::AutoHandleScope hs;

namespace sdkbox {
    class JSListenerBase {
    public:
        void setJSDelegate(const se::Value& jsDelegate);
        const se::Value& getJSDelegate();

        void invokeJSFun(const std::string& funName, const se::ValueArray& params = se::EmptyValueArray);
        void invokeJSFunNow(const std::string& funName, const se::ValueArray& params = se::EmptyValueArray);

    protected:
        se::Value _JSDelegate;
    };

    se::Value getPluginValue(se::Object* obj, const std::string& name);
}

bool register_all_SDKBoxJS_helper(se::Object* obj);
SE_DECLARE_FUNC(js_SDKBox_init);
SE_DECLARE_FUNC(js_SDKBox_getConfig);
SE_DECLARE_FUNC(js_SDKBox_setConfig);
