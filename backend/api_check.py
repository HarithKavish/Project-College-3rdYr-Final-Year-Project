import google.generativeai as genai

genai.configure()
models = genai.list_models()
for model in models:
    print(model.name)
