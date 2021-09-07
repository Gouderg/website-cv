from os import walk
from os.path import join

# Path to folder
PATH_TO_WRITE = "stylesheet/font.css"
PATH = "fonts"

# Open font.css
file = open(PATH_TO_WRITE, "w")

for path, dirs, files in walk(PATH):
    if len(path.split('/')) > 1:
        # Écriture de chaque commentaire
        file.write('/* '+path.split('/')[1]+' */\n\n')
        for filename in files:
            path_font = join(path,filename)
            path_font = join('..', path_font)
            file.write("@font-face { \n")
            file.write("\tfont-family: '"+filename.split('.')[0]+"';\n")
            file.write("\tsrc: url('"+path_font+"') format('truetype');\n")
            file.write("}\n\n")

file.close()
